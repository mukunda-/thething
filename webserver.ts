const express = require('express'),
      server  = express(),
      port    = 3000;

server.get('/', (req:any, res:any) => res.send('Hello World!'));

const page = `Example app listening at http://localhost:${port}`;

function start() {
  server.listen(port, () => console.log(page));  
}

export { start };