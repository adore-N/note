//可以把types文件导出的数据全部解析出来
import * as types from './types';

export default {
    [types.UPDATE_HOME]:({state,commit},payload)=>{
        console.log(1);
        axios({
            url:'http://localhost:3000/books/home'
        }).then(res=>{
            console.log(res.data)
            // let arr = [...res.data];

            // commit(types.DATA_TAB,res.data)
        })
    },
}