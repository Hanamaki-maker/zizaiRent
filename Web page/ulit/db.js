var mysql = require('mysql');
module.exports = {
    config: {
        host: '94.191.87.109',
        port: 3306,
        user: 'root',
        password: 'hs6j58q',
        database: 'level_3(three)'
    },
    connections: function (sql, sqlArr, calback) {
        var pool = mysql.createPool(this.config);
      pool.getConnection(function (err, connect) {
            if(err){throw err; return ;}
            connect.query(sql, sqlArr, calback);
            connect.release();

        }) 
        /* pool.getConnection(function(err){
            if(err){
                console.log('数据库连接失败.');
                throw err;
                
            }
            pool.query(sql,sqlArr,function(err,data,filelds){
                if(err){
                    console.log('数据库操作失败');
                    throw err;
                    
                }
                calback && calback(filelds,data);
                pool.end(function(err){
                    if(err){
                        console.log('关闭数据库连接失败');
                        throw err;
                    }
                })
            })
        }) */
    }
}

