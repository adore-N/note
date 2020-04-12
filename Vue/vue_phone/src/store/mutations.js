import * as types from './types';
export default {


    [types.VIEW_SEARCH]:(state,payload)=>state.bSearch=payload,
    [types.VIEW_HEADER]:(state,payload)=>state.bHeader=payload,
    [types.VIEW_TITLE]:(state,payload)=>state.title=payload,
    [types.VIEW_FOOTER]:(state,payload)=>state.bFooter=payload,
    [types.VIEW_LOADING]:(state,payload)=>state.bLoading=payload,

    //banner数据
    [types.UPDATE_BANNER]:(state,payload)=>state.banner=payload,

    [types.CHECK_USER]:(state,payload)=>state.user=payload,

    //加入购物车
    [types.ADD_CAR]:(state,payload)=>{
        state.buyCar=payload;  //
    },

    //增加减少商品数量
    [types.CHANGE_NUM]:(state,payload)=>{
      state.buyCar=payload;
    },
    //输入框的数量
    [types.CHECK_NUM]:(state,payload)=>{
      state.buyCar=payload;
    },
    //删除商品
    [types.DELETE_GOODS]:(state,payload)=>{
      state.buyCar=payload;
    },
    //单商品计算价格
    [types.SELECT_ONE]:(state,payload)=>{    
      state.account=payload;
    },
    //全选按钮计算价格
    [types.SELECT_ALL]:(state,payload)=>{   
      console.log(payload) 
      state.check=payload.payload;
      state.account=payload.account;
    }
}