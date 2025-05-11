var rule = {
    类型: '影视',//影视|听书|漫画|小说
    title: 'NT动漫[漫]',
    host: 'http://www.ntdm9.com/',
    url: '/type/fyclass-fypage.html',
    class_name: '日本&中国&欧美',
    class_url: 'riben&zhongguo&omei',
    searchUrl: '/search/**----------fypage---.html',
    searchable: 2,
    quickSearch: 0,
    filterable: 1,
    filter: '',
    filter_url: '',
    filter_def: {},
    headers: {
        'User-Agent': 'MOBILE_UA',
    },
    timeout: 5000,
    class_parse: '#side-menu li;a&&Text;a&&href;/(.*?)\.html',
    cate_exclude: '',
    play_parse: true,
    lazy: $js.toString(() => {
        var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]).url
   function maoss(jxurl, ref, key) {
        function AES(text, key, iv, isEncrypt) {
        eval(getCryptoJS());
        var key = CryptoJS.enc.Utf8.parse(key);
        var iv = CryptoJS.enc.Utf8.parse(iv);
        if (isEncrypt) {
            return CryptoJS.AES.encrypt(text, key, {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            }).toString();
        };
        return CryptoJS.AES.decrypt(text, key, {
            iv: iv,
            padding: CryptoJS.pad.Pkcs7
        }).toString(CryptoJS.enc.Utf8);
    }
        try {
            var getVideoInfo = function(text) {
                return AES(text, key, iv);
            };
            key = key == undefined ? 'dvyYRQlnPRCMdQSe' : key;
            if (ref) {
                var html = request(jxurl, {
                    headers: {
                        'Referer': ref
                    }
                });
            } else {
                var html = request(jxurl);
            }
            if (html.indexOf('&btwaf=') != -1) {
                html = request(jxurl + '&btwaf' + html.match(/&btwaf(.*?)"/)[1], {
                    headers: {
                        'Referer': ref
                    }
                })
            }
            var iv = html.match(/[_token|_iv] = "(.*?)"/)[1];
            eval(html.match(/var config = {[\s\S]*?}/)[0] + '');
            if (config.url.slice(0, 4) != 'http') {
                config.url = decodeURIComponent(tools.AES(config.url, key, iv));
            }
            return config.url;
        } catch (e) {
            return '';
        }
    }
    var url = maoss("https://danmu.yhdmjx.com/m3u8.php?url=" + html, input, "57A891D97E332A9D")

       input = {
          parse: 0,
          url: url
        }
    }),
    double: true,
    推荐: '.blockcontent;ul.ul_li_a5&&li;.anime_icon1_name&&Text;*;.anime_icon1_name1&&Text;*',
    一级: '.blockdif2;.cell_imform_name&&Text;img&&src;.newname&&Text;a&&href;.cell_imform_desc&&Text',
    二级: {
        title: 'h4&&Text;.baseblock2&&li:eq(-1)&&Text',
        img: 'img&&src',
        desc: '.baseblock2&&li&&Text;.baseblock2&&li:eq(-2)&&Text;.baseblock2&&li:eq(2)&&Text;;',
        content: '.detail_imform_desc_pre&&p&&Text',
        tabs: 'ul.title&&li',
        lists: '.movurl:eq(#id)&&a',
        tab_text: 'body&&Text',
        list_text: 'body&&Text',
        list_url: 'a&&href',
        list_url_prefix: '',
    },
    搜索: '*',
}