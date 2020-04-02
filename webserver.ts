const express = require('express'),
      server  = express(),
      port    = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

const page = `Example app listening at http://localhost:${port}`;

function start() {
  app.listen(port, () => console.log(page));  
}

export { start };