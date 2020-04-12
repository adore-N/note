let express = require('express');   //服务器模块
let mgdb = require('../../utils/mongo');    //连接数据库模块
let router = express.Router();      //路由

router.get('/',(req,res,next) => {
    //拿到浏览器携带的cookie   对比服务器上的session ????????是不是在访问服务器的时候,会自动把cookie信息带到服务器上面
    let _id = req.session[ 'chuyi' ];

    //根据判断是否有cookie;来要去用户是否需要登录
    if(_id){
        //有cookie信息
        mgdb({
            collectionName: 'user_info',
            success: ({ collection, client, ObjectID }) => {        //ObjectID ????????????????????
                collection.find({
                    //这里需要把用户的_id进行处理,因为集合里面用户的_id是ObjectId('5d85b90cd42d2512d8cfa75d');
                    _id: ObjectID(_id)
                },{
                    //配置
                }).toArray((err,result) => {                    //??????这里根据id cookie来判断是否安全,假设另一个用户同一个浏览器登录,???
                    if(err){
                        res.send({err: 1,msg: 'user_info集合操作失败'})
                    }else{
                        if(result.length > 0){
                            delete result[0].username;
                            delete result[0].password;
                            res.send({ err: 0,msg: '登录成功',data: result[0] });
                        }else{
                            res.send({err: 1,msg: '未查询到该用户,请登录'})
                        }
                    }
                    client.close();
                })
            },
            error: (err) => { console.log(err) }
        })
    }else{
        res.send({err: 1, msg: '未登录,请登录'})
    }
})
module.exports = router;