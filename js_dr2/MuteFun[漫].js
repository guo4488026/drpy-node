var rule = {
    模板: 'mxpro',
    title: 'MuteFun[漫]',
    host: 'https://www.mutedm.com/',
    class_parse: '.navbar-items li;a&&Text;a&&href;/(\\d+).html',

    lazy: $js.toString(() => {
        var html = request(input);

        var player = JSON.parse(html.match(/r player_.*?=(.*?)</)[1]);
        var jsurl = player.url;
        var from = player.from;

        var link = "https://www.mutefun.tv/addons/dp/player/dp.php?key=0&from=" + from + "&id=" + player.id + "&api=&url=" + jsurl + "&jump=";
        var htm = request(link, {
            headers: {
                "Referer": input
            }
        });

        var code = htm.match(/url": "(.*?)"/)[1]
        input = {
            url: code,
            jx: 0,
            parse: 0,
            header: {
                "Referer": input
            }

        }


    })
}