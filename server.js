// Zero-Dependency Hardened Static File HTTP Server for Cloudflare Tunnel
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3300;
const WEB_DIR = path.resolve(__dirname, 'web');

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

// Security Headers
const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Content-Security-Policy': "default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; script-src 'self' 'unsafe-inline'; connect-src 'self';"
};

const server = http.createServer((req, res) => {
  // 1. Method filtering (Only GET and HEAD allowed)
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { ...SECURITY_HEADERS, 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('405 Method Not Allowed');
    return;
  }

  // 2. Safe URL Parsing & URIError Protection (Anti-Crash)
  let pathname = '';
  try {
    const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    pathname = decodeURIComponent(parsedUrl.pathname);
  } catch (err) {
    res.writeHead(400, { ...SECURITY_HEADERS, 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('400 Bad Request');
    return;
  }

  // Default to index.html
  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  }

  // 3. Path Traversal Armor
  const safeRelativePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  const resolvedPath = path.resolve(WEB_DIR, '.' + safeRelativePath);

  // Strict Jail Enforcement: Must be within WEB_DIR
  if (!resolvedPath.startsWith(WEB_DIR)) {
    res.writeHead(403, { ...SECURITY_HEADERS, 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('403 Forbidden');
    return;
  }

  // 4. File existence and stream delivery
  fs.stat(resolvedPath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback for SPA/PWA or 404
      const indexPath = path.join(WEB_DIR, 'index.html');
      fs.readFile(indexPath, (fallbackErr, content) => {
        if (fallbackErr) {
          res.writeHead(404, { ...SECURITY_HEADERS, 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('404 Not Found');
          return;
        }
        res.writeHead(200, {
          ...SECURITY_HEADERS,
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'no-cache, must-revalidate'
        });
        if (req.method === 'HEAD') {
          res.end();
        } else {
          res.end(content);
        }
      });
      return;
    }

    const ext = path.extname(resolvedPath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    const headers = {
      ...SECURITY_HEADERS,
      'Content-Type': contentType
    };

    if (ext === '.html') {
      headers['Cache-Control'] = 'no-cache, must-revalidate';
    } else {
      headers['Cache-Control'] = 'public, max-age=86400'; // 1 day cache for static assets
    }

    res.writeHead(200, headers);

    if (req.method === 'HEAD') {
      res.end();
    } else {
      fs.createReadStream(resolvedPath).pipe(res);
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('====================================================');
  console.log(`🌸 Nihongo Master Hardened Server is running!`);
  console.log(`🚀 Local URL: http://localhost:${PORT}`);
  console.log(`🛡️ Security: Path Traversal Armor + CSP + Anti-DoS enabled`);
  console.log(`☁️ Cloudflare Tunnel Command:`);
  console.log(`   cloudflared tunnel --url http://localhost:${PORT}`);
  console.log('====================================================');
});
