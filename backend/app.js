const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: "ok", service: "backend" }));
  } else {
    res.writeHead(200);
    res.end("Backend running");
  }
});

server.listen(5000);