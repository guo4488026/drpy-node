var rule = {
title: '魔都动漫',
host: 'https://www.moduys02.com',
hostJs: '',
headers: {'User-Agent': 'MOBILE_UA'},
编码: 'utf-8',
timeout: 5000,
url: '/type/fyclass------addtime-fypage.html',
searchUrl: '/search/**/fypage.html',
searchable: 1, quickSearch: 1,
class_name: '国产动漫&日韩动漫&港台动漫&欧美动漫&动漫电影',
class_url: '1&2&3&4&5',
play_parse: true,
lazy: $js.toString(()=>{
     var html = request(input)
  
    player = JSON.parse(html.match(/cms_player.*?=(.*?);</)[1])
    var url = player.url
    
    input={
        url: url,
        parse: 0,
        jx:0
    }
    
}),
//parse_url: 'https://jiexi.modujx01.com/?url=',
推荐: '*;*;*;*;*',
一级: '.list-vod li;img&&alt;img&&data-original;.public-prt&&Text;a&&href',
二级: {
"title": "h1&&.slide-info-title&&Text;.slide-info:eq(2)&&Text",
"img": "img&&data-original",
"tabs": ".anthology-tab",
"lists": ".anthology-list-play:eq(#id)&&a",
"list_url": "a&&href"
},
搜索: 'body&&.search-box;*;*;*;a&&href',
}