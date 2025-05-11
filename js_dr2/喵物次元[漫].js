var rule = {
    title: "喵物次元",
    host: "https://www.mwcy.net",

    searchUrl: "/search/page/fypage/wd/**.html",
    homeUrl: '/show/1.html',
    searchable: 2,
    quickSearch: 0,
    filterable: 1,
    url: '/index.php/api/vod#type=fyclassfyfilter&page=fypage',
    filterable: 0,
    filter_url: '&class={{fl.类型}}&year={{fl.年份}}&letter={{fl.字母}}&by=time',
    filter: "H4sIAAAAAAAAA+2aW28TRxTHv0plaSQQtN41vuzytuvYXMIl3C8VDxZYQBugSlIqBEghkNSJQ+ygXEgJgaAGOyXGTgPFiXHyZTy7m6d+hc56d4/HJywCqqq0zJv3/ztzZua/s+szmr0ZkAO7v70Z+D59I7A7YC7X6Fw2sDNwNXUlzV9fT3X/mG4GXmUyHSxu3i3aMrsI3N7pqEZ+zlwad9Xg+e5Ub2/Q1bwQayNPR4rtIa7mhdC3A43qlDk52h7VkiFwZJluTKMoR/NCzLsla76/PcTVYNCZh8YUyuJqkOXFnDGCszgaZHk6Tx+VUBZH80I2Hz8wHi60h7gaZLmTNTPLKIujwaSHHmzOLKJJOxqE5MfoyxcoxNFgRjPrNJ9BM3I0GMvvNeMeCnE1mFFpwliZRDNyNMgysGRO4SXhaBAyVjTzQyjE0WBGCz/T1RqakaPBjArjW0JcDTqqVo1MDnXkaJBlYY5NAGVxtNY9yhv9U/geNTVY5PP91iC6064GWWbX2CJDWRyNW5iNteEtC9PWYLgjZbP+Gxquo4F1wwXj7iCyztFguP11c30MDdfRYCylUSszh8biaJBlYNicRGNxNRju+hitjNOFFTRikCFXvUYrOav8CqUDubXUq8zYzaW3eLV7cmsFrRj9BZofx4vIk2GmK/Obj59tmUlLhsClZ43V/JaMLfn2OTvUea3S1VeNWr31WoXrD3mthqRQ2OvkRjrVE2wKHN2F6S6ehjAN8VTGVOaphKnEUVlFlAkcVTBVeBrDNMbTKKZRnkYwjfAUeyXzXsnYK5n3SsZeybxXMvZK5r2SsVcy75WEvZJ4ryTslcR7JWGvJN4rCXsl8V5J2CuJ90rCXkm8VxL2SuK9krBXEu+VhL2SeK8k7BUT2h6X0rRRvs89Lt71hzwumpe7O93Xl+4JakB0RHQgcUTiQDoQ6QCSQCQBJIlIEsgeRPYA2YvIXiD7ENkHZD8i+4F0ItIJ5AAiB4AcROQgkEOIHAJyGJHDQLoQ6QJyBJEjQI4ichTIMUSOATmOyHEgJxA5AeQkIieBnELkFJDTiJwGcgaRM0DOInIWiPS1ipitsEfg3M5A6DMrx0WVLarsz7HK/v+V0P9AffzBZe9HVbOzFTq6xv09e9fveSt9l7qe6j3fc/mHvt3Xr12+sE3a3hrkr4XNGViavZeu/RQMBVM96VSQJCJECxMtRhIqUVWiRL+51Helu/VoPJ8xquV3t1SJFrXbJKJEV4iWbG9JcxVjdd2vTyVJdKnZUiV6or2lfTce1d/dMsaiiZKwU6g60TvaW7In1rcl62oXUSM+La3ssm9LhSisgezX5/SCMbvk16caI1qk+SNOtDjy9smib5/sZiSJpvr0Sdff+LaM2A7pMV+HKu93yL4r7+7zfoWuPfe9nx1uS11jqwL1eS/HFiDNLPp1q4Tt9dBaiSwdW08qukMLG2auZA7P+N0k5rOetFcIy6V1NH/YSxrNYuSpkd1gw/GdCBt/c2Ha97w1KJRl8I9Gbco3BRtIlCTCRNeJ6nkhtqpiq/plblWNR6+M6cU27kpiQyo2pGJDam9IP7cdqTggElvX//TWVRwQiQMicUAkqu4vtuoWB0SiHhf1+KfW4xFRj4t6XNTjoh4X9biox0U9LupxUY+LelzU4/9aPR7l6vG/9cfRFbfKbxr1DXOiaFXesP9rOjRoPK2av9wzXuesQobOFLfR5wOJCxfT263CgDmb/erWV8ZwlhUi5osyra1ZL182qlmrXte6uv58e6ftof345Dtu7Xhfcv4FYJVLVrG/NW24/rRPQszZJ+FO1ocxUTZG7xgjk3Q5RzMVc+K1VRhyBsdNzznijga7U1cvNr/CUONETYY7SSJJ9DhR5OYnDmGiJZtH556iaO4XF7rsnvArSvM7gZgdrEeax/YxokS9HyE3t6JDZjg/P3f7L3Cz3vpJMwAA",

    filter_def: "",
    headers: {
        "User-Agent": "MOBILE_UA"
    },
    timeout: 5000,
    class_name: "番剧&国漫&剧场&欧美动漫&4K专区",
    class_url: "1&24&2&25&26",
    detailUrl: '/bangumi/fyid.html',
    play_parse: true,
    lazy: $js.toString(() => {
        var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
        var url = html.url;
        if (html.encrypt == "1") {
            url = unescape(url);
        } else {
            if (html.encrypt == "2") {
                url = unescape(base64Decode(url));
            }
        }

      
        eval(request(rule.host + "/static/js/playerconfig.js"));
        var jx = MacPlayerConfig.player_list[html.from].parse;
        if (jx == "") {
            jx = MacPlayerConfig.parse;
        }
        eval(request(jx.replace("index", "ec").replace(/amp;/g, "") + url, {
            headers: {
                "Referer": input
            }
        }).match(/let ConFig.*}/)[0]);
        var video = CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(ConFig.url, CryptoJS.enc.Utf8.parse("2890" + ConFig.config.uid + "tB959C"), {
            iv: CryptoJS.enc.Utf8.parse("2F131BE91247866E"),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        })) + "#isVideo=true#";

        input = {
            parse: 0,
            jx: 0,
            url: video,
            header: {
                "Referer": input
            }
        }



    }),
    一级: $js.toString(() => {
        let body = input.split("#")[1];
        let t = Math.round(new Date / 1e3).toString();
        let key = md5("DS" + t + "DCC147D11943AF75");
        let url = input.split("#")[0];
        body = body + "&time=" + t + "&key=" + key;
        print(body);
        fetch_params.body = body;
        let html = post(url, fetch_params);
        let data = JSON.parse(html);
        VODS = data.list
    }),
    二级: {
        title: ".gen-search-form&&ul&&li--em&&Text;.gen-search-form&&ul&&li:eq(6)--em&&Text",
        img: ".lazy1.mask-0&&data-src",
        desc: ".gen-search-form&&ul&&li:eq(1)--em&&Text;.gen-search-form&&ul&&li:eq(4)--em&&Text;.gen-search-form&&ul&&li:eq(5)--em&&Text;.gen-search-form&&ul&&li:eq(2)--em&&Text;.gen-search-form&&ul&&li:eq(3)--em&&Text",
        content: ".gen-search-form&&ul&&li:eq(-1)--em&&Text",
        tabs: ".anthology-tab&&a",
        lists: ".anthology-list-play:eq(#id)&&li",
        tab_text: "body&&Text",
        list_text: "body&&Text",
        list_url: "a&&href"
    },
    搜索: "body&&.public-list-box;.thumb-txt&&Text;img&&data-src;.public-list-prb&&Text;a&&href;.right.rel.flex-auto&&Text"
}