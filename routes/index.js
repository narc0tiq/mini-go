var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(`Hello, world!`);
  //res.redirect(307, 'https://www.google.com/');
});

router.all('/:keyword', function(req, res, next) {
  res.send(`It's a ${req.params.keyword} world!`)
})

module.exports = router;
