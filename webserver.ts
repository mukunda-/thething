
const express = require('express'),
      server  = express(),
      port    = 3000;

const testablePage = `<!doctype html>
<html>
  <head>
    <script type="text/javascript">
      function tmwiwfd() {
        document.getElementById('wiwfd').innerHTML = '<p id="answer">coffee</p>';
      }
    </script>
  </head>
  <body>
    <p>What do I want for dinner?</p>
    <div id="wiwfd"></div>
    <input type="button" id="thebutton" onclick="tmwiwfd()" value="Let's find out" />
  </body>
</html>`;

server.get('/', (req:any, res:any) => res.send(testablePage));

const page = `Example app listening at http://localhost:${port}`;

let instance:any = null;

function start() {
   if (!!(instance)) { throw new TypeError('instance already MADE...'); } 
   instance = server.listen(port, () => console.log(page));  
}

function stop() {
   instance.close();
   instance = null;
}

export { start, stop };