const http = require('http');

const path = require('path');
const fs = require('fs');
const url = require('url');
const uaDevice = require('ua-device');

http.createServer((req, res) => {
    const ua = new uaDevice(req.headers['user-agent']).device.type;
    let pathname = url.parse(req.url).pathname;
    if (/\.html$/ig.test(pathname))   {
        pathname = (ua === 'mobile') ? '/mobile.html' : '/index.html';
    }
    const mockPath = path.join(__dirname, 'dist', pathname);
    

    if (fs.existsSync(mockPath)) {

        if (fs.statSync(mockPath).isDirectory()) {
            res.writeHead(301, { 'Location': ua === 'mobile'? '/mobile.html#/home':'/index.html#/home'});
            res.end();
        } else {
            res.writeHead(200, {
                'Content-Type': getContentType(path.parse(mockPath).ext),
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true
            });
            fs.createReadStream(mockPath, {
                autoClose: true
            }).pipe(res);
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(`no mock at ${mockPath}`);
        res.end();
    }
}).listen(80);

function getContentType(extension) {
    return {
        '.ico': 'application/x-ico',
        '.html': 'text/html',
        '.js': 'application/x-javascript',
        '.png': 'image/png',
        '.css': 'text/css'
    }[extension] || 'text/html';
}