const express = require('express');
const router = express.Router();
const sqlite = require('sqlite3').verbose();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(`Hello, world! ${req.app.get('env')}`);
});

router.all('/:keyword', function(req, res, next) {
  const db = new sqlite.Database('mini-go.sqlite3.db', sqlite.OPEN_READWRITE);
  const query = 'SELECT * FROM redirects WHERE keyword = ?';

  db.get(query, [req.params.keyword], (err, row) => {
    if(err) { throw err; }

    if(row) {
      res.send(`I'd send you to ${row.url}`);
    } else {
      res.statusCode = 404;
      res.send(`No redirect for '${req.params.keyword}'!`);
    }
  })
  //res.redirect(307, 'https://www.google.com/');
})

module.exports = router;
