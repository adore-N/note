let express = require('express');
let router = express.Router();
let mgdb = require('../../utils/mongo');
let fs = require('fs');
let pathObj = require('path');


//这里是对banner的操作,也就是基本的增删改查

//增加
router.post('/',(req, res, next) => {
    //对传进来的参数解析,以及没有传的数据处理
    let { content, author, title } = req.body;
    let time = Date.now();  //创建服务器的时间

    let icon, banner;
    // console.log(req.files);
    // console.log(req.body);
    req.files && req.files.forEach( (file, index) => {
        //找到每一张图片
        //根据管理端上传的图片的名称,如果是关于用户信息的图片,存储的用户的静态资源托管里面,反之,则相反
        if (file.fileName === 'icon') {
            icon = '/upload/user/' + file.filename + pathObj.parse(file.originalname).ext;
        }
        if (file.fieldname === 'banner') {
            banner = '/upload/banner/' + file.filename + pathObj.parse(file.originalname).ext;
          }
          // console.log('a',icon,banner)
          fs.renameSync(//本地图片命名
            file.path,
            file.path + pathObj.parse(file.originalname).ext
          )
    })

     //未传图片处理
    if (!banner) banner = '/upload/noimage.png';
    if (!icon) icon = '/upload/noimage.png';

    mgdb(
        {
        collectionName: 'banner',
        success:({collection, client}) => {
            collection.insertOne(
            { title, banner, time, detail: { icon, author, content } }
            ,
            (err, result) => {
                if (!err && result.result.ok) {
                // res.send({ error: 0, mess: '成功', data:  result.result.ops[0] })
                res.send({ err: 0, msg: '成功', data: { _id: result.insertedId, title, banner, time, detail: { icon, auth, content } } })
                } else {
                res.send({ err: 1, msg: '添加失败' })
                }
                client.close();
            }
            )
        }
        }
    );
})


module.exports = router;
