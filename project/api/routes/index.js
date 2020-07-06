var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log(req.session.islogin);
    if (req.session.islogin === true) {
        res.write('logged');
    } else {
        res.write('login page');
        req.session.islogin = true;
    }
  res.end();

});

module.exports = router;
