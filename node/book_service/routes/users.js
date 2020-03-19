var express = require('express');
var router = express.Router();
var user = require('../models/user');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//用户登录接口
router.post('/login',function(req,res,next){
  if(!req.body.username){
    res.json({status:1,message:"用户名为空"})
  }
  if(!req.body.password){
    res.json({status:1,message:"密码为空"})
  }
  user.findUserLogin(req.body.username,req.body.password,function(err,userSave){
    if(userSave.length !=0){
      res.json({status:0,message:"登陆成功"})
    }else{
      res.json({status:1,message:"登陆失败"})
    }
  })
});
//用户注册接口
router.post('/register',function(req,res,next){
  if(!req.body.username){
      res.json({status: 1,message:"用户名为空"})
  }
  if(!req.body.password){
      res.json({status: 1,message:"密码为空"})
  }
  if(!req.body.userMail){
      res.json({status: 1,message:"用户邮箱为空"})
  }
  if(!req.body.userPhone){
      res.json({status: 1,message:"用户手机为空"})
  }
  user.findByUsername(req.body.username,function(err,userSave){
      if(userSave.length!=0){
          res.json({status:1,message:"用户已注册"})
      }else{
          var registerUser = new user({
              username:req.body.username,
              password:req.body.password,
              userMail:req.body.userMail,
              userPhone:req.body.userPhone,
              userAdmin:0,
              userPower:0,
              userStop:0
          })
          registerUser.save(function(){
              res.json({status:0,message:"注册成功"})
              
          })
      }
  })
});

module.exports = router;
