var rule = {
	title:'路漫漫',
	// host:'https://www.96ba.com',
	host:'https://www.lmm96.com',
	// url:'/vod/show/id/fyclass/page/fypage.html',
	//hostJs: 'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});let src=jsp.pdfh(html,"#list02&&a&&href");print(src);HOST=src',
	url:'/vod/show/id/fyclassfyfilter.html',
	filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.by}}/page/fypage{{fl.year}}',
detailUrl: "/detail/fyid.html",
	filter:{
		"ribendongman":[{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"更早","v":"/year/2013-1980"}]},{"key":"by","name":"排序","value":[{"n":"更新","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"},{"n":"点赞","v":"/by/up"}]}],
		"guochandongman":[{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"更早","v":"/year/2013-1980"}]},{"key":"by","name":"排序","value":[{"n":"更新","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"},{"n":"点赞","v":"/by/up"}]}],
		"oumeidongman":[{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"更早","v":"/year/2013-1980"}]},{"key":"by","name":"排序","value":[{"n":"更新","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"},{"n":"点赞","v":"/by/up"}]}],
		"ribendonghuadianying":[{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"更早","v":"/year/2013-1980"}]},{"key":"by","name":"排序","value":[{"n":"更新","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"},{"n":"点赞","v":"/by/up"}]}],
		"guochandonghuadianying":[{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"更早","v":"/year/2013-1980"}]},{"key":"by","name":"排序","value":[{"n":"更新","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"},{"n":"点赞","v":"/by/up"}]}],
		"oumeidonghuadianying":[{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"更早","v":"/year/2013-1980"}]},{"key":"by","name":"排序","value":[{"n":"更新","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"},{"n":"点赞","v":"/by/up"}]}]
	},
	searchUrl:'/index.php/ajax/suggest?mid=1&wd=**&limit=50',
	searchable: 2,//是否启用全局搜索,
	quickSearch: 0,//是否启用快速搜索,
	headers: {
		'User-Agent': 'MOBILE_UA',
	},
	class_parse:'.container&&.tag.text-light;a&&Text;a&&href;.*/(.*?).html',
	play_parse: true,
	
lazy: $js.toString(() => {
   url = input;

        let true_url = '';
        var surl = url;
        var host = HOST;
        var html = request(url);
        var play = {};
        try {
            play = JSON.parse(html.match(/r player_.*?=(.*?)</)[1]);
        } catch (e) {}
        //log(play)
        var path = host + '/static/player/' + play.from + '.js';
        var parse = fetch(path);
        var match = /src = (.*?);/.exec(parse);
        if (match) {
            parse = match[1];
        } else {
            parse = /src=(.*?)\+'/g.exec(parse)[1].replace(/^"/, "'");
        }
        
        var window = {
            location: {
                href: surl
            }
        }
        var MacPlayer = {
            Parse: '',
            PlayUrl: play.url,
        }
        if(/mp4|m3u8/.test(play.url)){
            input = { parse: 0, url: play.url.replace(/&t=hls&ct=1|&t=hls/,"")  }
        }

        let trul = '';
        eval('turl=' + parse);
        let phtml = '';
        var json = JSON.parse(fetch(turl, {
            headers: {
                Referer: surl,
            },
            onlyHeaders: true
        }))
        if (turl != json.url) {
            phtml = fetch(json.url, {
                headers: {
                    Referer: turl,
                },
            });
            turl = json.url;
        } else {
            phtml = json.body;
        }
      

        try {
            eval(phtml.match(/var vid = [\s\S]*?play.*;/g)[0]);
        } catch {}
        
        try {
            eval(phtml.match(/var weParse[\s\S]*?(?=function)/g)[0]);
        } catch {}
        
        
        eval(getCryptoJS());

        function getc(_0xdab24c) {
            var _0x32508f = gett('BlILGwo2OBoAATIXE1NXCwQALg0KE1xS');
            var _0x32508f = decode3(_0x32508f);
            var _0x145ef1 = '1348987635684651';
            var _0x4e339a = getDAesString(_0xdab24c, _0x32508f, _0x145ef1);
            return _0x4e339a;
        }

        function getDAesString(_0x4894f5, _0x94982e, _0x1a5246) {
            var _0x94982e = CryptoJS.enc.Utf8.parse(_0x94982e);
            var _0x1a5246 = CryptoJS.enc.Utf8.parse(_0x1a5246);
            var _0x5e248d = CryptoJS.AES.decrypt(_0x4894f5, _0x94982e, {
                'iv': _0x1a5246,
                'mode': CryptoJS.mode.CBC,
                'padding': CryptoJS.pad.Pkcs7
            });
            return _0x5e248d.toString(CryptoJS.enc.Utf8);
        }

        function base64decode2(_0x6288a9) {
            var _0x129e5e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            var _0x135129, _0x2e0a45, _0x4ce1d8, _0xff4692, _0x2b9846, _0x596dac, _0x1e1130, _0x137328, _0x52e869 = 0,
                _0x5997e8 = 0,
                _0x51fd8d = '',
                _0x408cf1 = [];
            if (!_0x6288a9) {
                return _0x6288a9;
            }
            _0x6288a9 += '';
            do {
                _0xff4692 = _0x129e5e.indexOf(_0x6288a9.charAt(_0x52e869++));
                _0x2b9846 = _0x129e5e.indexOf(_0x6288a9.charAt(_0x52e869++));
                _0x596dac = _0x129e5e.indexOf(_0x6288a9.charAt(_0x52e869++));
                _0x1e1130 = _0x129e5e.indexOf(_0x6288a9.charAt(_0x52e869++));
                _0x137328 = _0xff4692 << 0x12 | _0x2b9846 << 0xc | _0x596dac << 0x6 | _0x1e1130;
                _0x135129 = _0x137328 >> 0x10 & 0xff;
                _0x2e0a45 = _0x137328 >> 0x8 & 0xff;
                _0x4ce1d8 = _0x137328 & 0xff;
                if (_0x596dac == 64) {
                    _0x408cf1[_0x5997e8++] = String.fromCharCode(_0x135129);
                } else if (_0x1e1130 == 64) {
                    _0x408cf1[_0x5997e8++] = String.fromCharCode(_0x135129, _0x2e0a45);
                } else {
                    _0x408cf1[_0x5997e8++] = String.fromCharCode(_0x135129, _0x2e0a45, _0x4ce1d8);
                }
            } while (_0x52e869 < _0x6288a9.length);
            _0x51fd8d = _0x408cf1.join('');
            return _0x51fd8d;
        }

        function gett(_0x55e7f2) {
            key = 'daolianlaopowanrenlun';
            _0x55e7f2 = base64decode2(_0x55e7f2);
            len = key.length;
            code = '';
            for (i = 0; i < _0x55e7f2.length; i++) {
                k = i % len;
                code += String.fromCharCode(_0x55e7f2.charCodeAt(i) ^ key.charCodeAt(k));
                ttcode = base64decode2(code);
            }
            return ttcode;
        }

        function decode3(input) {
            var sortedString = input.split('').sort((char1, char2) => {
                return char1.localeCompare(char2, 'zh-CN');
            }).join('');
            return sortedString;
        }

        var [_, u, body] = /\$\.post\("(.*?)",.?({.*?})/g.exec(phtml);

        eval('body=' + body);
        var php = "<a href='" + u + "'>";
        var p = pd(php, 'a&&href', turl);
        
        var tbody = Object.keys(body).map(it=>{
          return it+"="+body[it]
        }).join("&")
        log(tbody)
        
        var json = request(p, {
            body: tbody,
            method: "POST",
            headers: {
                Referer: turl,
            }
        })
        try {
            true_url = JSON.parse(json).url;
            true_url = decodeURIComponent(true_url);
        } catch {}
        input = {parse:0,url: true_url}
    }),

	limit: 6,
	推荐:'.owl-theme-jable .item;*;*;*;*',
	一级:'#mdym .col-6;h6&&Text;.lazyload&&data-src;.label&&Text;a&&href',
	二级:{
		"title":"h1&&Text;.video-info-aux&&Text",
		"img":".url_img&&src",
		"desc":".video-info-items--span:eq(3)&&Text;;;.video-info-actor:eq(1)&&Text;.video-info-actor:eq(0)&&Text",
		"content":".video-info-content&&Text",
		"tabs":".module-tab-content .tab-item",
		"lists":".scroll-content:eq(#id) a"
	},
	搜索:'json:list;name;pic;*;id'
}