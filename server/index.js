const express = require('express');
const proxy = require('http-proxy-middleware');
const search = require('./middlewares/search');

const app = express();

// app.use('/static', express.static('static'));

app.use('/search/:searchString', search);

app.use('/api', proxy({
  target: 'http://v3.wufazhuce.com:8000',
  changeOrigin: true,
  headers: {
    Referer: 'http://v3.wufazhuce.com:8000',
  },
}));

// app.get('/', function(req, res) {
//   res.sendFile(__dirname + '/index.html');
// });

app.listen(3001, () => {
  console.log('server run at localhost:3001');
});
