let express = require('express');   //服务器模块
let mgdb = require('../../utils/mongo');    //数据库连接模块
let router = express.Router();  //路由设置
var bcrypt = require('bcrypt') //加密

router.post('/',(req,res,next) => {
    let { tel, password, save } = req.body;
    console.log(tel,password)
    //用户名密码是必填参数
    if (!tel || !password){
        res.send({err: 1, msg: '用户名密码是必填项'});
        return;
    }
    // console.log(1);

    //跑库 || 验证用户名密码是否正确
    mgdb({
        dbName:'shop',
        collectionName:'user',
        success: ( {collection, client, ObjectID} ) => {
            collection.find({
                tel            //条件 根据用户名查询用户的密码,进行比对,一样就是正确
            },{
                //配置
            }).toArray( (err, result ) => {
                //不报错,数据库连接成功
                if(!err){
                    if (result.length > 0){
                        //密码比对,单数要比对的是加密的密码
                        let pass = bcrypt.compareSync(password, result[0].password);
                        if(pass){
                            //对比一样,密码正确
                            //这里根据用户是否需要种cookie,需要是否传参数save
                            if(save){
                                req.session[ 'chuyi' ] = result[0]._id;
                            }
                            //返回用户信息,但是要用户名和密码除外
                            delete result[0].password;
                            delete result[0].tel;
                            // console.log(result)
                            res.send({err:0, msg:'登录成功',data:result[0]});
                        }else{
                            //密码对比失败
                            res.send({ err: 1, msg: '用户名或者密码有误' })
                        }
                    }else{
                        //集合表中没有根据这个用户名查询用户
                        res.send({err: 1, msg: '用户名或密码错误' });
                    }
                }else{
                    //数据连接报错
                    res.send({err: 1,msg:'user操作失败'});
                }
                //关闭连接
                client.close();
            })
        }
    })
})

module.exports = router;