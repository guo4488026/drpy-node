var rule = {
    title: '绿色仓库[密]',
    hostJs: $js.toString(() => {
        HOST = base64Decode('aHR0cDovL2hzY2submV0');
        let html = request(HOST);
        let strU = html.match(/strU="(.*?)"/)[1];
        let locationU = strU + HOST.rstrip('/') + '/&p=/';
        //log(locationU);
        let resp = request(locationU, {withHeaders: true, redirect: false});
        HOST = JSON.parse(resp).location;
    }),
    url: '/vodtype/fyclass-fypage.html',
    searchUrl: '/vodsearch/-------------.html?wd=**',
    searchable: 2,
    quickSearch: 0,
    filterable: 0,
    headers: {
        'User-Agent': 'MOBILE_UA',
    },
    class_name: '',
    class_url: '1&2&3&4&7&8&9&10&15&21&22',
    // class_parse: '.stui-header__menu&&li;a&&Text;a&&href',
    play_parse: true,
    lazy: $js.toString(()=>{
    var  url=JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]).url;
    input={
        url: url,
        parse: 0,
        jx:0
    }
}),
    limit: 6,
    推荐: '*',
    double: true, // 推荐内容是否双层定位
    一级: '.stui-vodlist&&li:not(:matches(站长担保|24小时在线匹配|正宗莞式服务|澳门威尼斯|多人操B-自慰调教-高清无码直播));h4&&Text;a&&data-original;.pic-text&&Text&&Text;a&&href',
    二级: '*',
    预处理: $js.toString(() => {
        rule.class_name = ungzip('H4sIAAAAAAAAA3s2fenL+SvVns7e+2TXcrVna5Y/39en9rRrxbM9q9WeTV/6bM6aZ3M6ny9oBHIWAKknO9Y+m9b+dO30pzunqkFkUIUgWsBqoYa+WN72ctFEqNEvV894tqMVasHTzuXPmoGc/mXPN+6GKAMAEeHbf48AAAA=')
    }),
}