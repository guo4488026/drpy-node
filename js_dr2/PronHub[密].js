var rule = {
    title: 'PornHub',
    host: 'https://cn.pornhub.com',
    url: '/fyclass?page=fypage',
    searchUrl: '/video/search?search=**&page=fypage',
    searchable: 2,
    quickSearch: 0,
   headers:{ 'User-Agent':'Mozilla/5.0 (Linux; Android 11; Mi 10 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.152 Mobile Safari/537.36' },
    timeout: 5000,
    
   class_name: "中文&推荐",
   class_url: "language/chinese&recommended",
    play_parse: true,
    lazy: $js.toString(() => {
         var html=fetch(input);
        
                                var media= JSON.parse(html.split("mediaDefinitions\":")[1].split("}]")[0]+"}]");
                           var media=media.sort((a, b)=>b.quality-a.quality);
                           
                         var urls = [];
                    var names = [];
                    for (var it of media) {
                        if (it.format == "hls") {
                            try {
                                var name = JSON.parse(it.quality);
                                JSON.parse(it.quality)
                                urls.push(it.videoUrl);
                                names.push(it.quality)

                            } catch (e) {}
                        }
                    }  
                           
                           
                input ={
                    parse: 0,
                    jx: 0,
                    url: urls[0]
                }          
                          
                   
          
    }),
    limit: 12,
    推荐: '*',
    二级: '*',
    一级: '.videoList&&li:has(img);img&&alt;img&&data-path;.views&&Text;a&&href',
    搜索:'*'
 }