const http = require('http');
const fs = require('fs');
const path = require('path');
const root = __dirname;
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png','.webp':'image/webp','.svg':'image/svg+xml'};
http.createServer((req,res)=>{
  const clean = decodeURIComponent(req.url.split('?')[0]);
  const requested = clean === '/' ? 'index.html' : clean.replace(/^\//,'');
  const file = path.normalize(path.join(root, requested));
  if (!file.startsWith(root)) { res.writeHead(403); return res.end('Forbidden'); }
  fs.readFile(file,(err,data)=>{
    if(err){res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});return res.end('Not found');}
    res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-cache'});res.end(data);
  });
}).listen(process.env.PORT||3000,()=>console.log('Zaurino Accademia: http://localhost:'+(process.env.PORT||3000)));
