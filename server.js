const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const FILE = path.join(__dirname, 'TRE_Dashboard_Apr2026.html');

http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/TRE_Dashboard_Apr2026.html') {
    fs.readFile(FILE, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading dashboard');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    });
  } else {
    res.writeHead(302, { Location: '/' });
    res.end();
  }
}).listen(PORT, () => {
  console.log(`TRE Dashboard running on port ${PORT}`);
});
