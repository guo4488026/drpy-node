var rule = {
author: '黑可乐',
title: '爱爱影院',
host: 'https://22wa.github.io/22vda',
hostJs: 'let html=request(HOST,{headers:{"User-Agent":MOBILE_UA}});let src= jsp.pdfh(html,"body&&ul&&a:eq(1)&&href");HOST=src',
headers: {'User-Agent': 'MOBILE_UA'},
编码: 'utf-8',
timeout: 5000,

homeUrl: '/',
url: '/index.php/vod/type/id/fyfilter/page/fypage.html',
filter_url: '{{fl.cateId}}',
detailUrl: '',
searchUrl: '/index.php/vod/search/page/fypage/wd/**.html',
searchable: 1, 
quickSearch: 1, 
filterable: 1, 

class_name: '视频一区&视频二区&视频三区',
class_url: '1&2&3',
filter_def: {
1: {cateId: '1'},
2: {cateId: '2'},
3: {cateId: '3'}
},

tab_rename: {'道长在线': '在线播放'},
play_parse: true,
parse_url: '',
lazy: `js:
var kcode = JSON.parse(request(input).match(/var player_.*?=(.*?)</)[1]);
var kurl = kcode.url;
if (/m3u8|mp4/.test(kurl)) {
input = { jx: 0, parse: 0, url: kurl }
} else{
input = { jx: 0, parse: 1, url: kurl }
}`,

limit: 9,
double: false,
推荐: '*',
一级: '.row.col5 dt;a&&title;img&&data-src;i&&Text;a&&href',
二级: '*',
搜索: '*',

filter: {"class":[{"type_id":"1","type_name":"视频一区"},{"type_id":"2","type_name":"视频二区"},{"type_id":"3","type_name":"视频三区"}],"filters":{"1":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":""},{"n":"国产情色","v":"6"},{"n":"日本无码","v":"7"},{"n":"日本有码","v":"8"},{"n":"中文字幕","v":"9"},{"n":"欧美极品","v":"10"},{"n":"动漫精品","v":"11"},{"n":"强奸乱伦","v":"12"},{"n":"学生系列","v":"31"}]}],"2":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":""},{"n":"变态另类","v":"13"},{"n":"国产直播","v":"14"},{"n":"巨乳美乳","v":"15"},{"n":"制服诱惑","v":"16"},{"n":"熟女人妻","v":"20"},{"n":"三级伦理","v":"21"},{"n":"自拍偷拍","v":"22"},{"n":"AI换脸","v":"23"}]}],"3":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":""},{"n":"海外明星","v":"24"},{"n":"少女萝莉","v":"25"},{"n":"国产传媒","v":"26"},{"n":"网红黑料","v":"27"},{"n":"女同性恋","v":"28"},{"n":"人妖系列","v":"29"},{"n":"AV解说","v":"30"},{"n":"极品少妇","v":"32"}]}]}}
}