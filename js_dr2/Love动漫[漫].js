var rule = {
  title: 'Love动漫',
  host: 'https://anime.girigirilove.com',
  url: '/show/fyclass--------fypage---/',
  searchUrl: '/search/**-------------/',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  
  headers: {
    'User-Agent': 'MOBILE_UA',
  },
  class_name: '日漫&美漫&剧场版&真人版&BD&其他',
  class_url: "2&3&21&20&24&26",
  play_parse: true,
  lazy: `js:
  var html = request(input)
  
    html = JSON.parse(html.match(/r player_.*?=(.*?)</)[1])
    var url = html.url
    if (html.encrypt == '1') {
        url = unescape(url);
    } else if (html.encrypt == '2') {
        url = unescape(base64Decode(url));
    }
     if(url.match(/m3u8|mp4/)){
        input = {
            jx:0,
            parse:0,
            url:url,
            header:{
                "Referer": input
            }
        }
     }else{
        input
     }`,
  limit: 6,
  推荐: '.tab-list.active;a.module-poster-item.module-item;.module-poster-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href',
  double: true,
  一级: 'body .public-list-box;a&&title;.lazy&&data-src;.public-list-prb&&Text;a&&href',
  二级: {
    title: 'h3&&Text;.detail-info&&.slide-info:eq(-1)&&Text',
    img: '.lazy&&data-src',
    desc: '.slide-info&&.slide-info-remarks&&Text',
    content: '#height_limit&&Text',
    tabs: '.anthology-tab a',
    lists: '.anthology-list-play:eq(#id)&&a',
  },
  搜索: 'body .public-list-box;.thumb-txt&&Text;.lazy&&data-src;.public-list-prb&&Text;a&&href',
}