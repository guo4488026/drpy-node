var rule = {
  title: 'MX动漫',
  host: 'http://www.mxdm6.com',
  模板: "mxone5",
  url: '/show/fyclass--------fypage---.html',
  searchUrl: "/search/-------------.html?wd=**",
  searchable: 2,
  quickSearch: 0,
  //filterable: 1,
  filter: { },
 // filter_url: 'class={{fl.class}}&area={{fl.area}}&lang={{fl.lang}}&version={{fl.version}}&state={{fl.state}}&letter={{fl.letter}}&page=fypage&time=%%time%%&key=%%key%%&by={{fl.order}}',
  headers: {
    'User-Agent': 'MOBILE_UA',
  },
  class_name: '日本动漫片库&国产动漫片库&动漫电影片库&欧美动漫片库',
  class_url: "riman&guoman&dmdianying&oman",
  play_parse: true,
  lazy: `js:
  var player = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
    var jsurl = player.url;
    var fro = player.from; eval(fetch("http://www.mxdm6.com/static/js/playerconfig.js"));
    var jx = MacPlayerConfig.player_list[fro].parse;
    if (jx == '') {
        jx = MacPlayerConfig.parse
    };
    if (jx.startsWith("/")) {
        jx = "https:" + jx;
    }
    var url = jx + jsurl;
    try {
       
         var html = request(url);
      
        var key = CryptoJS.enc.Utf8.parse("57A891D97E332A9D");
        var le_token = html.split('_token = "')[1].split('"')[0];
        var iv = CryptoJS.enc.Utf8.parse(le_token);
        var data = html.match(/getVideoInfo\\("(.*?)"/)[1];
        var video = CryptoJS.AES.decrypt(data, key, {
            iv: iv
        }).toString(CryptoJS.enc.Utf8)+"#.mp4";
        input = {
            jx:0,
            parse:0,
            url: video
        }
    } catch (e) {
        input
    }
`,
  limit: 6,
  
}