// 1.引入第三方模块
const express = require('express');
const mysql = require('mysql');
const cors = require("cors")
const session = require("express-session");
//引入body-parser
const bodyParser=require('body-parser');
//2.配置第三方模块
// 2.1配置连接池
var pool = mysql.createPool({
    host:'127.0.0.1',
    user:"root",
    password:"",
    port:3306,
    database:"offce",
    connectionLimit:"15"
})
// 2.2跨域
var server = express();
//使用body-parser中间件，将post请求的数据格式化为对象
server.use( bodyParser.urlencoded({
    extended:false
  }) );
server.use(cors({
    //运行什么地址访问
    origin:["http://127.0.0.1:8080","http://lcoalhost:8080"],
    credentials:true
}))
//session
server.use(session({
    secret:"128位字符串",
    resave:true,
    saveUninitialized:true
}))
server.listen(3000)
//3.完成用户登录
server.get("/login",(req,res)=>{
    //1.参数
    var uname = req.query.uname;
    var upwd = req.query.upwd;
    // 
    var sql = "select * from"
    sql +=" offce_login where uname = ?"
    sql +=" and upwd = md5(?)"
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({
                code:-1,msg:"用户名或密码有误"
            })
        }else{
            req.session.uid = result[0].id;
            //将当前用户uid保存在session对象
            res.send({
                code:1,msg:"登录成功"
            })
        }
    })
})

/* 注册 */
server.get("/reg",(req,res)=>{
    //1.参数
    var uname = req.query.uname;
    var upwd = req.query.upwd;
    var phone = req.query.phone
    console.log(uname)
    console.log(upwd)
    var sql="INSERT INTO offce_login VALUES (null,?,?,?)";
    pool.query(sql,[uname,upwd,phone],(err,result)=>{
        if(err) throw err;
        console.log(result)
        if(result.affectedRows>0){
            res.send({code:1,msg:"注册成功"});
        }
    })
})
/* 注册 */
// server.post("/reg",(req,res)=>{
    // var $phone=req.body.phone;
    // var uname=req.body.uname;
    // var upwd=req.body.upwd;
    // console.log(uname)
    // if(!$phone){
    //     res.send("手机号未接收到");
    //     return;
    // }
    // if(!uname){
    //     res.send("用户名未接收到");
    //     return;
    // }
    // if(!upwd){
    //     res.send("密码未接收到");
    //     return;
    // }
//     console.log(123)
//     var sql="INSERT INTO offce_login(uname,upwd) VALUES(null,?,?)";
//     pool.query(sql,[uname,upwd],(err,result)=>{
//         if(err)throw err;
//         if(result.affectedRows>0){
//             res.send({code:1,msg:"注册成功"});
//         }
//     })
    
// });
/* 
（1）启动node app.js
（2）打开浏览器在地址栏输入
    http://127.0.0.1:3000/login.....
 */