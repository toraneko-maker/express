// routes/yesno.js
var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/', async (req, res) => {
  // YesNo API を叩く
  request('https://yesno.wtf/api', (err, response, body) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error');
    }

    try {
      const data = JSON.parse(body);

      res.json({
        answer: data.answer, // "yes" or "no" or "maybe"
        image: data.image,   // GIF画像のURL
      });
    } catch (e) {
      console.error(e);
      res.status(500).send('Parse Error');
    }
  });
});

module.exports = router;
