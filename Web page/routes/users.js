var express = require('express');
var router = express.Router();

/* GET users listing. */
/* router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */
router.get('/hostel_live.do',function(req,res,next){
  res.send('sefids')
})
module.exports = router;
