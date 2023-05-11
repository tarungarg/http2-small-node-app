const http2 = require('http2');

const fs = require('fs');

const server = http2.createSecureServer({
  key: fs.readFileSync('your.key'),
  cert: fs.readFileSync('your.cert'),
});

server.on('stream', (stream, headers) => {
  stream.respond({ status: 200, 'content-type': 'application/json' });

  stream.end('hello world');
});

server.listen(8000);
console.log('listing the server');
