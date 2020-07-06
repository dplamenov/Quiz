const express = require('express');
const router = express.Router();

const controllers = require('../controllers');

router.get('/', function (req, res) {
    res.send(JSON.stringify({msg: 'welcome to quiz api'}));
});
router.get('/user/islogin', controllers.user.isLogin);


module.exports = router;