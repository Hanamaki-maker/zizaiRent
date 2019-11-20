var express = require('express');
var db = require("../ulit/db.js");
var router = express.Router();

/* GET users listing. */
router.get('/hostel_live.do', function(req, res, next) {
  let sql = 'select * from t_service where 1=1 and service_type = ?';
  
  db.connections(sql,[req.query.service_type],(err,data)=>{
      if(err){
          console.log(err)
      }
      res.send(data)
  })

});

//名宿搜索页面
router.get('/hoste_room.do',function(req,res,next){
    let dat1=null;
    let dat2=null;
    let sql = 'select * from t_rent,t_house where rent_special = ? and rent_special =house_id ';

    db.connections(sql,[req.query.rent_special],(err,dat)=>{
        if(err){
            console.log(err);
        }
        if(dat){
            db.connections('select * from t_houseimg where img_id =?',[req.query.num],(err,data1)=>{
                if(err){
                    console.log(err);
                }
                dat1 = [...data1];
                db.connections('select * from t_icon ',[],(err,data)=>{
                    if(err){
                        console.log(err);
                    }
                    dat2 = [...data];
                    res.send({first:dat,second:dat1,third:dat2})
                });
            });
            
        }
        
        
    });
    
    
   
})
module.exports = router;