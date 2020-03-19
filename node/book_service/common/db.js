var mongoose = require('mongoose');
var url = 'mongodb://localhost/movieServer'
mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology: true},function(err){
    if(err){
        console.log(err);
    }else{
        console.log('数据库连接成功');
    }
});
module.exports=mongoose;