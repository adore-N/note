import * as types from './types';
export default {
    [types.DATA_TAB]:(state,payload)=>state.d_tab = payload,
    [types.DATA_TAB_TYPE]:(state,payload)=>state.d_tab_type = payload
}