var rule = {
    title: '驴番[漫]',
    host: 'https://www.lvfan.fun',
    url: 'vodshow/fyclass--------fypage---/',
    class_name: "动漫&日漫&国漫",
    class_url: "22&20&21",
    searchUrl:"/vodsearch/-------------/?wd=**",
    一级: "body .video-content-item;.video-name&&Text;.lazyload&&data-original;.video-title&&Text;a&&href",
    二级: {
        title: "h1&&Text;.detail-info-text&&ul&&li:eq(0)&&Text",
        img: ".block-image&&.lazyload&&data-original",
        desc: ".detail-info-text&&ul&&li:eq(1)&&Text;.detail-info-text&&ul&&li:eq(2)&&Text;.detail-info-text&&ul&&li:eq(3)&&Text;.detail-info-text&&p:eq(0)&&Text;.detail-info-text&&p:eq(1)&&Text",
        content: "",
        tabs: ".ewave-playlist-tab li",
        lists:".ewave-playlist-content:eq(#id) li",
        
    },
    lazy_parse:false,
    lazy: "",
    搜索: "body article;a&&title;a&&data-original;.voddate&&Text;a&&href"
}