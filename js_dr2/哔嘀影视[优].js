var rule = {
    title: '哔嘀影视',
    host: 'https://v.xlys.ltd.ua',
    url: 'fyclass/fypage',
    homeUrl: "https://v.xlys.ltd.ua/s/all?type=1&area=%E4%B8%AD%E5%9B%BD%E5%A4%A7%E9%99%86",
    class_name: "不限&动作&爱情&喜剧&科幻&恐怖&战争&武侠&魔幻&剧情&动画&惊悚&3D&灾难&悬疑&警匪&文艺&青春&冒险&犯罪&纪录&古装&奇幻&国语&综艺&历史&运动&原创压制&美剧&韩剧&国产电视剧&日剧&英剧&德剧&俄剧&巴剧&加剧&西剧&意大利剧&泰剧&港台剧&法剧&澳剧",
    class_url: "/s/all&/s/dongzuo&/s/aiqing&/s/xiju&/s/kehuan&/s/kongbu&/s/zhanzheng&/s/wuxia&/s/mohuan&/s/juqing&/s/donghua&/s/jingsong&/s/3D&/s/zainan&/s/xuanyi&/s/jingfei&/s/wenyi&/s/qingchun&/s/maoxian&/s/fanzui&/s/jilu&/s/guzhuang&/s/qihuan&/s/guoyu&/s/zongyi&/s/lishi&/s/yundong&/s/yuanchuang&/s/meiju&/s/hanju&/s/guoju&/s/riju&/s/yingju&/s/deju&/s/eju&/s/baju&/s/jiaju&/s/spanish&/s/yidaliju&/s/taiju&/s/gangtaiju&/s/faju&/s/aoju",

    searchUrl: '/search/**/1',
    searchable: 2, //是否启用全局搜索,
    quickSearch: 0, //是否启用快速搜索,
    headers: {
        'User-Agent': 'MOBILE_UA',
    },

    play_parse: true,

    lazy: $js.toString(() => {
        if (/ed2k:|magnet:|\.torrent/.test(input)) {
            return {
                parse: 0,
                url: input,
                jx: 0
            }
        } else {
            input
        }

    }),

    limit: 6,
    推荐: '*',
    一级: $js.toString(() => {
        var html = fetch(input);
        pdfh = jsp.pdfh;
        pdfa = jsp.pdfa;
        pd = jsp.pd;
        var d = []
        var list = pdfa(html, "body&&.card-sm");
        for (var it of list) {
            var url = pd(it, "a&&href");
            d.push({
                title: pdfh(it, "h3&&Text"),
                img: pd(it, "img&&src"),
                desc: pdfh(it, "span&&Text"),
                url: url.includes(";") ? url.split(";")[0] : url
            })
        }
        setResult(d)
    }),
    二级: {
        "title": "h2&&Text;.mb-2&&p:eq(4)&&Text",
        "img": ".url_img&&src",
        "desc": ".mb-2&&p:eq(7)&&Text;;;.mb-2&&p:eq(1)&&Text;.mb-2&&p:eq(3)&&Text",
        "content": ".card-body&&Text",
        "tabs": `js:
		
	            TABS = [];
        var plays=pdfa(html,"#play-list&&a")
        if(plays.length>=1){
       TABS.push("播放列表")
       }
       var ed= pdfa(html,"#download-list&&tr");
        if(ed.length>=1){
       TABS.push("下载列表")
       }
      
       var to=pdfa(html,"#torrent-list&&a");
         if(to.length>=1){
       TABS.push("种子下载")
       }
		
		`,
        "lists": $js.toString(() => {
            pdfh = jsp.pdfh;
            pdfa = jsp.pdfa;
            pd = jsp.pd;
            LISTS = [];
            var plays = pdfa(html, "#play-list&&a").map(it => {
                return pdfh(it, "a&&Text") + "$" + pd(it, "a&&href")
            });
            LISTS.push(plays)
            try {
                var ed = pdfa(html, "#download-list&&tr").reverse().map(it => {
                    return pdfh(it, ".text-muted&&Text") + "$" + pdfh(it, "a&&href")
                });
                LISTS.push(ed)
            } catch (e) {}
            try {
                var to = pdfa(html, "#torrent-list&&a").reverse().map(it => {
                    return pdfh(it, "a&&Text") + "$" + pd(it, "a&&href")
                });

                LISTS.push(to)
            } catch (e) {

            }



        })
    },
    搜索: '.row-cards>.col-12;.d-inline-block&&title;.object-cover&&src;.card-body&&Text;.col-md-2@href',
}