const http = require('http');

const path = require('path');
const fs = require('fs');
const url = require('url');

http.createServer((req, res) => {
    const mockPath = path.join(__dirname, 'dist', url.parse(req.url).pathname);

    if (fs.existsSync(mockPath)) {
        if (fs.statSync(mockPath).isDirectory()) {
            res.writeHead(301, { 'Location': '/index.html#/home'});
            res.end();
        } else {
            res.writeHead(200, {
                'Content-Type': getContentType(path.parse(mockPath).ext),
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Set-Cookie': '__token=asdfasdf;domain=localhost:8080;'
            });
            // 模拟200ms的网络延迟
            setTimeout(function () {
                fs.createReadStream(mockPath, {
                    autoClose: true
                }).pipe(res);
            }, 10);
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(`no mock at ${mockPath}`);
        res.end();
    }
}).listen(8080);

function getContentType(extension) {
    return {
        '.ico': 'application/x-ico',
        '.html': 'text/html',
        '.js': 'application/x-javascript',
        '.png': 'image/png',
        '.css': 'text/css'
    }[extension] || 'text/html';
}