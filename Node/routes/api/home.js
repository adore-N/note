let express = require('express');
let router = express.Router();
let mgdb = require('../../utils/mongo');

//首页详情
//get请求.在路由里面home是这个路由的天
router.get('/',(req,res,next)=>{
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin); //循序跨域
    //解构赋值,拿到req身上带来的数据
    let { _id, _page, _limit, _sort, q} = req.query;

    //写数据的搜素条件
    q = q ? { $or: [{ title: eval('/' + q + '/')}, {des: eval('/' + q + '/')} ]} : {} ; //mongodb里面的查询可以配合正则使用

    if (_id) {
        //查看详细信息
        findDetail({_id, req, res, next});
    } else {
        //用户发送数据没有id,类似于模糊查询
        mgdb ({
            collectionName: 'product',
            success: ({collection,client}) => {
                collection.find(
                    q,  //条件              //注意:这里是模糊查询(使用关键字),但是对于汉字,会变成 q=%E5%A5%BD 需要重新编码 
                    {
                        sort: { [ _sort ]: -1 },      //这里因为_sort是一个变量,对象的属性是一个变量的时候,需要使用中括号语法
                        skip: _page * _limit,
                        limit: _limit   
                    }
                ).toArray((err,result) => {
                    if (err) {
                        res.send({ err: 1, msg: 'product集合操作失败' })        //????这里的条件不完整,当查询不到数据时候,没有进行业务处理
                    } else {
                        res.send(result);       //如果查询到的数据一条都没有需要做if判断 result.lenght > 0
                    }
                    client.close();
                })
            },
            error: (err) => { console.log(err) } 
        })
    }
})

    //进行详细查询
    router.get('/:id',(req, res, next) => {
        console.log(req.params.id)
        findDetail({ _id: req.params.id, req, res, next });
    })


    //用户进行详细信息查询的方法
    function findDetail({ _id, req, res, next }){
        mgdb ({
            collectionName: 'product',
            success: ({ collection, client, ObjectID}) => {
                collection.find(
                    {
                        _id: ObjectID(_id) //条件
                    },  
                    {
                        //配置
                    }
                ).toArray((err,result) => {
                    if (err) {
                        res.send({ err: 1, msg: 'product集合操作失败' })
                    } else {
                        if (result.length > 0) {
                            res.send({ err: 0, data: result[0] })  
                        } else {
                            res.send({ err: 1, msg: '未查询到' })
                        }
                    }
                    client.close();
                })
            },
            error: (err) => { console.log(err) }
        })
    }

module.exports = router;