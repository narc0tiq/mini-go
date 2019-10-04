const express = require('express');
const router = express.Router();
const sqlite = require('sqlite3').verbose();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(`Hello, world! ${req.app.get('env')}`);
});

function fail(res, code, message) {
  res.statusCode = code;
  res.send(message);
}

router.all('/:keyword', function(req, res, next) {
  const db = new sqlite.Database('mini-go.sqlite3.db', sqlite.OPEN_READWRITE, (err) => {
    if(err) { fail(res, 500, `Failed to connect: ${err.message}`); }
  });
  const query = 'SELECT * FROM redirects WHERE keyword = ?';

  db.get(query, [req.params.keyword], (err, row) => {
    if(err) { throw err; }

    if(row) {
      res.send(`I'd send you to ${row.url}`);
    } else {
      fail(res, 404, `No redirect for '${req.params.keyword}'!`);
    }
  })
  //res.redirect(307, 'https://www.google.com/');
})

module.exports = router;
