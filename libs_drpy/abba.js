// Adapted from abab
//

const keystr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

/**
 * Implementation of atob() according to the HTML and Infra specs, except that
 * instead of throwing INVALID_CHARACTER_ERR we return null.
 */
function atob(data) {
    if (arguments.length === 0) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    // Web IDL requires DOMStrings to just be converted using ECMAScript
    // ToString, which in our case amounts to using a template literal.
    data = `${data}`;
    // "Remove all ASCII whitespace from data."
    data = data.replace(/[ \t\n\f\r]/g, '');

    // "If data's length divides by 4 leaving no remainder, then: if data ends
    // with one or two U+003D (=) code points, then remove them from data."
    if (data.length % 4 === 0) {
        data = data.replace(/==?$/, '');
    }

    // "If data's length divides by 4 leaving a remainder of 1, then return
    // failure."
    //
    // "If data contains a code point that is not one of
    //
    // U+002B (+)
    // U+002F (/)
    // ASCII alphanumeric
    //
    // then return failure."
    if (data.length % 4 === 1 || /[^+/0-9A-Za-z]/.test(data)) {
        throw new DOMException(
            'Failed to decode base64: invalid character',
            'InvalidCharacterError'
        );
    }

    // "Let output be an empty byte sequence."
    let output = '';
    // "Let buffer be an empty buffer that can have bits appended to it."
    //
    // We append bits via left-shift and or.  accumulatedBits is used to track
    // when we've gotten to 24 bits.
    let buffer = 0;
    let accumulatedBits = 0;

    // "Let position be a position variable for data, initially pointing at the
    // start of data."
    //
    // "While position does not point past the end of data:"
    for (let i = 0; i < data.length; i++) {
    // "Find the code point pointed to by position in the second column of
    // Table 1: The Base 64 Alphabet of RFC 4648. Let n be the number given in
    // the first cell of the same row.
    //
    // "Append to buffer the six bits corresponding to n, most significant bit
    // first."
    //
    // atobLookup() implements the table from RFC 4648.
        buffer <<= 6;
        buffer |= atobLookup(data[i]);
        accumulatedBits += 6;

        // "If buffer has accumulated 24 bits, interpret them as three 8-bit
        // big-endian numbers. Append three bytes with values equal to those
        // numbers to output, in the same order, and then empty buffer."
        if (accumulatedBits === 24) {
            output += String.fromCharCode((buffer & 0xff0000) >> 16);
            output += String.fromCharCode((buffer & 0xff00) >> 8);
            output += String.fromCharCode(buffer & 0xff);
            buffer = accumulatedBits = 0;
        }
    // "Advance position by 1."
    }

    // "If buffer is not empty, it contains either 12 or 18 bits. If it contains
    // 12 bits, then discard the last four and interpret the remaining eight as
    // an 8-bit big-endian number. If it contains 18 bits, then discard the last
    // two and interpret the remaining 16 as two 8-bit big-endian numbers. Append
    // the one or two bytes with values equal to those one or two numbers to
    // output, in the same order."
    if (accumulatedBits === 12) {
        buffer >>= 4;
        output += String.fromCharCode(buffer);
    } else if (accumulatedBits === 18) {
        buffer >>= 2;
        output += String.fromCharCode((buffer & 0xff00) >> 8);
        output += String.fromCharCode(buffer & 0xff);
    }

    // "Return output."
    return output;
}

/**
 * A lookup table for atob(), which converts an ASCII character to the
 * corresponding six-bit number.
 */
function atobLookup(chr) {
    const index = keystr.indexOf(chr);

    // Throw exception if character is not in the lookup string; should not be hit in tests
    return index < 0 ? undefined : index;
}


/**
 * btoa() as defined by the HTML and Infra specs, which mostly just references
 * RFC 4648.
 */
function btoa(s) {
    if (arguments.length === 0) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    let i;

    // String conversion as required by Web IDL.
    s = `${s}`;

    // "The btoa() method must throw an "InvalidCharacterError" DOMException if
    // data contains any character whose code point is greater than U+00FF."
    for (i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) > 255) {
            throw new DOMException(
                'The string to be encoded contains characters outside of the Latin1 range.',
                'InvalidCharacterError'
            );
        }
    }

    let out = '';

    for (i = 0; i < s.length; i += 3) {
        const groupsOfSix = [ undefined, undefined, undefined, undefined ];

        groupsOfSix[0] = s.charCodeAt(i) >> 2;
        groupsOfSix[1] = (s.charCodeAt(i) & 0x03) << 4;

        if (s.length > i + 1) {
            groupsOfSix[1] |= s.charCodeAt(i + 1) >> 4;
            groupsOfSix[2] = (s.charCodeAt(i + 1) & 0x0f) << 2;
        }

        if (s.length > i + 2) {
            groupsOfSix[2] |= s.charCodeAt(i + 2) >> 6;
            groupsOfSix[3] = s.charCodeAt(i + 2) & 0x3f;
        }

        for (let j = 0; j < groupsOfSix.length; j++) {
            if (typeof groupsOfSix[j] === 'undefined') {
                out += '=';
            } else {
                out += btoaLookup(groupsOfSix[j]);
            }
        }
    }

    return out;
}

/**
 * Lookup table for btoa(), which converts a six-bit number into the
 * corresponding ASCII character.
 */
function btoaLookup(index) {
    if (index >= 0 && index < 64) {
        return keystr[index];
    }

    // Throw INVALID_CHARACTER_ERR exception here -- won't be hit in the tests.
    return undefined;
}


globalThis.atob = atob;
globalThis.btoa = btoa;