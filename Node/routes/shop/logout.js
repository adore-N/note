var express = require('express');
var router = express.Router();

router.delete('/', function(req, res, next) {
    //退出直接珊瑚cookie
  req.session['chuyi'] = undefined;
  res.send({err:0,msg:'注销成功'})
});

module.exports = router;