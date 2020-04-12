//引入使用模块
let express = require('express');
let router = express.Router();
let mgdb = require('../../utils/mongo');
let fs = require('fs');         //需要对用户上传的头像,进行文件处理
let pathLib = require('path');     //需要对用户上传的图片进行改名+后缀的处理
let bcrypt = require('bcrypt'); //需要对用户的密码进行加密处理

router.post('/',function(req,res,next){
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin); //循序跨域
    //获取用户的数据
    let {username, password, nickname, icon } = req.body;
    console.log(username,password);

    //要去用户名,密码是必传参数
    if (!username || !password) {
        res.send({ err: 1, msg: '用户名和密码是必传参数'});
        return;
    }
    
    //处理一些默认参数
    let attention = 0;      //用户的关注和粉丝都为0
    let fans = 0;       
    let time = Date.now();  //注册时间为服务器时间 
    
    //密码进行加密操作
    password = bcrypt.hashSync(password,10);     // bcrypt.hashSync(password,10)  参数1:需要进行加密的参数 参数2:加盐数,越大加密越高
    nickname = nickname || '系统默认名字';
    // console.log(username,password);

    //用户的头像处理
    // icon需要使用multer模块(文件上传模块) 
    if(req.files && req.files.length>0 ){
        // //改名的,整合路径,存储  fs.renameSync(oldfile,newfile);
        fs.renameSync(
            //如果用户上传图片,就把用户的图片存储到服务器,给一个名字
            req.files[0].path,
          req.files[0].path + pathLib.parse(req.files[0].originalname).ext
        )
        icon = '/upload/user/' + req.files[0].filename + pathLib.parse(req.files[0].originalname).ext
      }else{
        //用户没用上传图片,就给一个体统的图片,路径就是系统的路径
        icon = '/upload/noimage.png';               //???????这里为什么这么写? 是不是因为做了静态资源托管,会自动到pubic文件夹找找,只要写后面的路径就行了
        // console.log(1);
    }

    //所有的数据都准备好了,准备吧数据存储到库里面就行了
    // console.log(username,password,nickname,icon,time,attention,fans);
    mgdb({
        collectionName:'user_info',
        success:({collection,client}) => {
            //先查找用户是否已经存在
            collection.find({
                username
            },{
                //配置
            }).toArray((err,result)=>{
                if (!err) {
                    //不报错,说明数据库操作成功,返回的数据长度大于1,说明查找到数据,用户名已经存在
                    if(result.length > 0){
                        //返回信息
                        res.send({err: 1, msg: "用户名已存在"});
                        //同时,把用户上传上来的图片删除,这里的if是判断必须是用户自己上传的图片
                        //不可以是系统给的,要不然就把系统给的删除了
                        if(icon.indexOf('noimage.png') === -1){
                            fs.unlinkSync('./public' + icon);
                        }
                        client.close();
                    }else{
                        //用户名不存在,用户注册,把用户信息存到集合里面
                        collection.insertOne({
                            username, password, nickname, attention, fans, time, icon
                        },(err,result)=>{
                            if(!err){
                                //注册成功,返回用户数据信息,但是返回的数据里面吧password删除掉
                                delete result.ops[0].password;
                                res.send({err: 0 ,msg: '注册成功', data: result.ops[0]});
                            }else{
                                //插入失败
                                res.send({err:1,msg:'user集合操作失败'});
                                client.close();
                            }
                        })
                    }
                }else{
                    res.send({err:1,msg:'user集合操作失败'});
                    client.close();
                }
            })
        }
    })
})

module.exports = router;