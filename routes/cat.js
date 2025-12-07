// routes/cat.js

var express = require('express');
var router = express.Router();
const request = require('request');

// GET /cat に来たときの処理
router.get('/', (req, res) => {
  request('https://api.thecatapi.com/v1/images/search', (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const data = JSON.parse(body);   // JSON文字列 → JSの配列
      res.json(data);                  // そのままブラウザに返す
    } else {
      console.error(error);
      res.status(500).send('Error');
    }
  });
});

module.exports = router;   // ★これが超重要！
