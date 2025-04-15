
var rule = {
    模板: 'mxone5',
    title: '圣城影视',
    host: 'https://sc1080.top',
    url: '/index.php/vod/show/id/fyclass/page/fypage.html',
    searchUrl: '/search.php?page=fypage&searchword=**&searchtype=',
    class_parse: '.header-module li;a&&Text;a&&href;id\/(\\d+)\.html',
    lazy: ``,
}