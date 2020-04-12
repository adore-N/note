//脚手架自带引入模块
var createError = require('http-errors');   //对报错信息处理的模块
var express = require('express');           //服务器模块
var path = require('path');                 //原生的系统模块
var cookieParser = require('cookie-parser');  //种cookie
var logger = require('morgan');               //用来做日志管理

var cors = require('cors');


//自己引入的模块.中间件
let multer = require('multer');     //文件上传模块
let cookieSession = require('cookie-session');  //种cookie,留session 的中间件

//web服务器
var app = express();  

// view engine setup  中间件的配置
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');  //ejs配置

app.use(logger('dev'));   //日志
app.use(express.json());  
app.use(express.urlencoded({ extended: false }));   //express自带的body-parser
app.use(cookieParser());

//静态资源托管      ????这里为什么分为三个托管路径
app.use(express.static(path.join(__dirname, 'public','template')));
app.use('/admin',express.static(path.join(__dirname, 'public','admin')));   //????????????????这里什么意思?
app.use(express.static(path.join(__dirname, 'public')));      

//文件上传的存储位置 
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if(req.url.indexOf('user')!==-1 || req.url.indexOf('reg')!==-1){
      cb(null, path.join(__dirname, 'public','upload','user'));
    }else if(req.url.indexOf('banner')!==-1){
      cb(null, path.join(__dirname, 'public','upload','banner'));
    }else{
      cb(null, path.join(__dirname, 'public/upload/product'));
    }
  }
});
let multerObj = multer({storage});
// let multerObj = multer({dest:'字符路径'})    //这样的指定方式存储位置太固定了,storage分目录
app.use(multerObj.any()); //指定上传文件的类型

//进行中间件cookie的配置
let arr = [];
for(var i = 0;i < 100; i++){
  arr.push('chuyi' + Math.random());    //自动来生成数据.来进行cookie的加密
}
app.use(cookieSession({
  name:'chuyi_id',      //存储的cookie名字
  keys:['aa','vv'],   //必填,表示加密程度  || arr
  maxAge:1000*60*60*24    //cookie的存储时间
}))
//跨域设置
app.use(cors({
  "origin": ["http://localhost:8003","http://127.0.0.1:5500","http://localhost:8080","http://localhost:3000"],  //允许所有前端域名
  "credentials":true,//允许携带凭证
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE", //被允许的提交方式
  "allowedHeaders":['Content-Type','Authorization']//被允许的post方式的请求头
}));
//对响应进行处理(路由分发业务)    
// app.use('/../....',路由)

//管理端的响应    做路由处理,这样可以减轻主模块的负担,将业务分发出去
app.use('/admin/banner',require('./routes/admin/banner'))

//用户端的响应
app.all('/api/*',require('./routes/api/params'))  //对于所有来自api接口的请求都进行处理,必须进行参数的处理
app.use('/api/home',require('./routes/api/home'));  //请求主页接口
app.use('/api/columns',require('./routes/api/columns'));  //请求接口
app.use('/api/register',require('./routes/api/register'));  //请求注册接口
app.use('/api/login',require('./routes/api/login'));  //请求登录接口
app.use('/api/user',require('./routes/api/user'));  //请求登录接口
app.use('/api/logout',require('./routes/api/logout'));  //请求退出接口
app.use('/api/vuenode',require('./routes/api/vuenode'));  //请求退出接口

app.all('/shop/*',require('./routes/api/params')); //对于所有来自api接口的请求都进行处理,必须进行参数的处理
app.use('/shop/home',require('./routes/shop/home'));  //首页
app.use('/shop/login',require('./routes/shop/login'));    //登录
app.use('/shop/reg',require('./routes/shop/register'));    //注册
app.use('/shop/logout',require('./routes/shop/logout'));    //注销
app.use('/shop/banner',require('./routes/shop/banner'));    //获取banner数据
app.use('/shop/goods',require('./routes/shop/goods'));    //获取banner数据

app.all('/design/*',require('./routes/api/params')); //对于所有来自api接口的请求都进行处理,必须进行参数的处理
app.use('/design/home',require('./routes/design/home'));  //首页
app.use('/design/login',require('./routes/design/login'));    //登录
app.use('/design/reg',require('./routes/design/register'));    //注册
app.use('/design/logout',require('./routes/design/logout'));    //注销
app.use('/design/banner',require('./routes/design/banner'));    //获取banner数据
app.use('/design/goods',require('./routes/design/goods'));    //获取banner数据
app.use('/design/designer',require('./routes/design/designer'));    //获取设计师数据
app.use('/design/design',require('./routes/design/design'));    //获取效果图数据



app.post('/api/test',(req,res)=>{
  res.send('成功');
});  //请求退出接口



// catch 404 and forward to error handler     请求接口找不到的时候,404报错
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({err:1,msg:'错误的接口或者请求方式'});
  // res.render('error')   ejs的后端渲染
});

module.exports = app;
