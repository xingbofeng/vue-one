var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();
app.use('/static', express.static('static'));
app.use('/api', proxy({
  target: 'http://v3.wufazhuce.com:8000',
  changeOrigin: true,
  headers: {
    Referer: 'http://v3.wufazhuce.com:8000',
  },
}));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.listen(3000);
