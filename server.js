// Zero-Dependency Static File HTTP Server for Cloudflare Tunnel
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3300;
const WEB_DIR = path.join(__dirname, 'web');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8'
};

const server = http.createServer((req, res) => {
  // Normalize path
  let safePath = path.normalize(decodeURIComponent(req.url)).replace(/^(\.\.[\/\\])+/, '');
  if (safePath === '/' || safePath === '\\') {
    safePath = '/index.html';
  }

  const filePath = path.join(WEB_DIR, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback for SPA/PWA or 404
      const indexPath = path.join(WEB_DIR, 'index.html');
      fs.readFile(indexPath, (fallbackErr, content) => {
        if (fallbackErr) {
          res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('404 Not Found');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(content);
      });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Cache control headers for PWA
    const headers = {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*'
    };

    if (ext === '.html') {
      headers['Cache-Control'] = 'no-cache, must-revalidate';
    } else {
      headers['Cache-Control'] = 'public, max-age=86400'; // 1 day cache for assets
    }

    res.writeHead(200, headers);
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('====================================================');
  console.log(`🌸 Nihongo Master Server is running!`);
  console.log(`🚀 Local URL: http://localhost:${PORT}`);
  console.log(`☁️ Cloudflare Tunnel Command:`);
  console.log(`   cloudflared tunnel --url http://localhost:${PORT}`);
  console.log('====================================================');
});
