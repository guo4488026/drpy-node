import path from 'path';
import {readdirSync, readFileSync, existsSync} from 'fs';
import '../utils/marked.min.js';
const LOG_WITH_FILE = process.env.LOG_WITH_FILE;

export default (fastify, options, done) => {
    // 添加 / 接口
    fastify.get('/', async (request, reply) => {
        if (LOG_WITH_FILE){
            let readmePath = null;
            const files = readdirSync(options.rootDir);
            // console.log(files);
            for (const file of files) {
                if (/^readme\.md$/i.test(file)) {
                    readmePath = path.join(options.rootDir, file);
                    break;
                }
            }

            // 如果未找到 README.md 文件
            if (!readmePath) {
                let fileHtml = files.map(file => `<li>${file}</li>`).join('');
                reply.code(404).type('text/html;charset=utf-8').send(`<h1>README.md not found</h1><ul>${fileHtml}</ul>`);
                return;
            }

            // 读取 README.md 文件内容
            const markdownContent = readFileSync(readmePath, 'utf-8');

            // 将 Markdown 转换为 HTML
            const htmlContent = marked.parse(markdownContent);

            // 返回 HTML 内容
            reply.type('text/html').send(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link href='/public/css/main.css' rel='stylesheet' type='text/css'/>
                    <title>drpyS(drpy-node)</title>
                </head>
                <body>
                    ${htmlContent}
                </body>
                </html>
            `);
        }else{
            // 设置文件路径
            const indexPath = path.join(options.rootDir, 'public', 'index.html');

            // 读取 index.md 文件内容
            const indexContent = readFileSync(indexPath, 'utf-8');

            // 返回 HTML 内容
            reply.type('text/html').send(indexContent);
        }
    });

    // 新增 /favicon.ico 路由
    fastify.get('/favicon.ico', async (request, reply) => {
        try {
            // 设置文件路径
            const faviconPath = path.join(options.rootDir, 'public', 'favicon.ico');

            // 如果文件存在，返回图片
            if (existsSync(faviconPath)) {
                return reply.sendFile('favicon.ico', path.join(options.rootDir, 'public')); // 直接返回图片
            } else {
                reply.status(404).send({error: 'Favicon not found'}); // 如果文件不存在，返回 404 错误
            }
        } catch (error) {
            reply.status(500).send({error: 'Failed to fetch favicon', details: error.message});
        }
    });
    done();
};
