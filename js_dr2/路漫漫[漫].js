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
        function getDAesString(token) {
            eval(getCryptoJS());
            var key = CryptoJS.enc.Utf8.parse("ejjooopppqqqrwww");

            var iv = CryptoJS.enc.Utf8.parse("1348987635684651");

            var token = CryptoJS.AES.decrypt(token, key, {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7,
            });

            return token.toString(CryptoJS.enc.Utf8);
        }

        var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
        var url = html.url;
        var from = html.from;
        if (html.encrypt == "1") {
            url = unescape(url);
        } else if (html.encrypt == "2") {
            url = unescape(base64Decode(url));
        }
        if (/\.mp4|\.m3u8|\.flv/.test(url)) {
            input = {
                parse: 0,
                url: url.split("&")[0],
                js: ''
            };
        } else {
            var jsh = request(HOST + "/static/player/" + from + ".js", {
                headers: {
                    Referer: input
                },
            }).match(/\.src\s*=\s*(.*?);/)[1];
            //log(MY_HOME);
            if (/type=/.test(jsh)) {
                jsh = jsh
                    .replace(/[\+\s']/g, "")
                    .replace(/MacPlayer.Parse/, "")
                    .replace(/MacPlayer.PlayUrl/, url)
                    .replace(/window.location.href/, input);
                var playht = fetch(jsh, {
                    headers: {
                        Referer: HOST
                    }
                });
            } else {
                jsh = jsh
                    .replace(/[\+\s']/g, "")
                    .replace(/MacPlayer.Parse/, "")
                    .replace(/MacPlayer.PlayUrl/, url)
                    .replace(/window.location.href/, input);

                jsh = JSON.parse(
                    fetch(jsh, {
                        headers: {
                            Referer: HOST
                        },
                        onlyHeaders: true
                    })
                ).url;
                var playht = fetch(jsh, {
                    headers: {
                        Referer: HOST
                    }
                });
            }

            var postapi = jsh.match(/^(.*?\/\/.*?\/.*?\/)/)[1];

            var posturl = postapi + playht.match(/post\("(.*?)"/)[1];
            if (/act\s*=/.test(playht)) {
                var vid = playht.match(/vid\s*=\s*"(.*?)"/)[1];
                var t = playht.match(/var\s*t\s*=\s*"(.*?)"/)[1];
                var token = playht.match(/token\s*=\s*"(.*?)"/)[1];
                var act = playht.match(/act\s*=\s*"(.*?)"/)[1];
                var play = playht.match(/play\s*=\s*"(.*?)"/)[1];
                token = getDAesString(token);

                var data = JSON.parse(
                    post(posturl, {
                        headers: {
                            Referer: HOST
                        },
                        body: {
                            vid: vid,
                            t: t,
                            token: token,
                            act: act,
                            play: play,
                        },
                        timeout: 5000
                    })
                );
                input = {
                    parse: 0,
                    url: data.url,
                    js: ''
                };
            } else {
                var key = "";

                playht.match(/var (\w+)="(.*?)";/g).forEach(function(list) {
                    key += list.match(/"(.*?)"/)[1];
                });
                const bodys = JSON.parse(
                    playht
                    .match(/post\(.*?,(.*?),\n/)[1]
                    .replace(/"keyyy"\s*:\s*''.*?''/, '"keyyy" : "' + key + '"')
                );
                var data = JSON.parse(
                    post(posturl, {
                        headers: {
                            Referer: HOST
                        },
                        body: bodys
                    })
                );
                if (data.ext == "xgplayer") {
                    var dataurl =
                        "https://yun.366day.site/mp4hls/xgplayer.php?vid=" + data.url;
                    var video = fetch(dataurl, {
                        headers: {
                            Referer: jsh
                        }
                    }).match(
                        /"url": "(.*?)"/
                    )[1];
                    input = {
                        parse: 0,
                        url: video,
                        js: ''
                    };
                } else if (data.ext == "hls" || data.ext == "hls_list") {
                    input = {
                        parse: 0,
                        url: decodeURIComponent(data.url),
                        js: ''
                    };
                } else {
                    input = {
                        parse: 0,
                        url: data.url,
                        js: ''
                    };
                }
            }
        }
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