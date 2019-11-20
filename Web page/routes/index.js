var express = require('express');
var db = require("../ulit/db.js")
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//hoste 部分
router.get('/../hostel_live.do',function(req,res,next){
  let sql = 'select * from t_service where 1=1';
  db.connections(sql,[],(err,data)=>{
      res.send(data)
  })
})


//首页活动
router.get('/activity.do', function(req,res,next){
  let sql = 'select * from t_activity';
  db.connections(sql,[],(err,data)=>{
    if(err){
      console.log(err);
    }
    res.send(data);
  })

})

//三个服务
router.get('/service.do', function(req,res,next){
  
  let sql = 'select * from t_service where service_type<=?';
  db.connections(sql, [req.query.type] ,(err,data)=>{
    if(err){
      console.log(err);
    }
    res.send(data)
  })
})


//优质房源
 router.get('/rent_house.do',function(req,res,next){
  let sql = 'select * from t_rent where 1=1';
  db.connections(sql,[],(err,data)=>{
    if(err){
      console.log(err)
    }
    res.send(data)
  })

}) 

//服务页面三个服务
router.get('/idx_service.do',function(req,res,next){
  let sql = 'select * from t_service where service_type=5';
  db.connections(sql,[],(err,data)=>{
    if(err){
      console.log(err);
      
    }
    res.send(data)
  })
})
//登录
router.get('/denglu.do',function(req,res,next){
  let sql = 'select * from t_user where user_name=? and user_pwd=?';
  console.log(req.query.username,req.query.password);
  
  db.connections(sql,[req.query.username,req.query.password],(err,data)=>{
    if(err){
      console.log(err);
      
    }
    // console.log(req.session);
    
    if(data.length>0){
      // req.session
      res.send(data)
    }else{
      res.send('用户名或密码错误')
    }
    
  })
})

//注册
router.get('/reg.do',function(req,res,next){
  let sql = 'select * from t_user where user_name=? ';
  // console.log(req.query.username,req.query.password);
  
  db.connections(sql,[req.query.username],(err,data)=>{
    if(err){
      console.log(err);
    }
    if(data.length>0){
      res.send('用户名已存在')
    }else{
      db.connections('insert into t_user (user_name,user_pwd) values (?,?)',[req.query.username,req.query.password],(err,data)=>{
        if(err){
          console.log(err);
        }
        res.send('注册成功')
      })
      
    }
  })
})

//保洁+9
router.get('/baojie.do',function(req,res,next){
  let sql = 'select * from t_service where service_type=6';
  db.connections(sql,[],(err,data)=>{
    if(err){
      console.log(err);
      
    }
    res.send(data)
  })
})

//商品
router.get('/mall.do',function(req,res,next){
  let sql = 'select * from t_mall where 1=1';
  db.connections(sql,[],(err,data)=>{
    if(err){
      console.log(err);
      
    }
    res.send(data)
  })
})


//面积，地区默认排序
router.get('/rent.do', function (req, res) {
  let text = req.query.val
  let arae = req.query.arae
  let price = req.query.price
  // console.log(text);
  if (text == 2) {
    let sql = 'select * from t_rent order by rent_special asc '
    db.connections(sql, [], function (err, data) {
      if (err) {
        console.log(err)
      }
      res.send(data)
    })
  }
  if (text == 1) {
    let sql = 'select * from t_rent order by rent_price '
    if (price % 2 == 0) {
      sql += ' desc'
    } else {
      sql += ' asc'
    }
    db.connections(sql, [], function (err, data) {
      if (err) {
        console.log(err)
      }
      res.send(data)
    })
  }
  if (text == 0) {
    let sql = 'select * from t_rent order by rent_area '
    if (arae % 2 == 0) {
      sql += ' desc'
    } else {
      sql += ' asc'
    }
    db.connections(sql, [], function (err, data) {
      if (err) {
        console.log(err)
      }
      res.send(data)
    })
  }
})

router.get('/region.do', function (req, res) {
  let arr = req.query.arr
  let sqlarr = []
  // let arrr = req.query.arrr
  console.log(arr);
  let sql = 'select * from t_rent where 1=1 '
  if (arr[0] != '') {
    console.log('区域');
    if (arr[0] == '不限') {
      sql += ' order by rent_special asc'
      sqlarr.push(arr[0])
    } else {
      sql += ' and rent_region = ? '
      sqlarr.push(arr[0])
    }
  }
  if (arr[1] != '') {
    console.log('类型');
    if (arr[1] == '不限') {
      sql += ' order by rent_special asc'
      sqlarr.push(arr[1])
      console.log(2);
    } else {
      sql += ' and rent_type like ? '
      console.log(1);
      sqlarr.push('%'+arr[1]+'%')
    }
  }
  console.log(sqlarr);
  
  
  db.connections(sql, sqlarr, function (err, data) {
    if (err) {
      console.log(err)
    }
    res.send(data)
  })

})

module.exports = router;
