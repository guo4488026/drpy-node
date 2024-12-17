import {marked} from 'marked';
import fs from 'fs';

// 读取README.md文件
fs.readFile('README.md', 'utf8', function(err, data) {
    if (err) {
        console.error("Error reading README.md:", err);
        return;
    }

    // 使用marked将Markdown转换为HTML
    let html = "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><link href='/public/css/main.css' rel='stylesheet' type='text/css'/><title>drpyS(drpy-node)</title></head><body class='main os-windows'><div class='main-content'><div id='write' class=''>${htmlContent}</div></div></body></html>";
    html = html.replace("${htmlContent}",marked(data));

    // 写入转换后的HTML到README.html
    fs.writeFile('public/index.html', html, function(err) {
        if (err) {
            console.error("Error writing index.html:", err);
        } else {
            console.log("index.html has been created.");
        }
    });
});