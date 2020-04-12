// 1、引入axios模块
import axios from 'axios';

// 2、判断是什么环境 -- 开发环境 -- 生产环境
// 真  ----   开发环境 ---- 反向代理
// 假  ----   生产环境
const isDev = process.env.NODE_ENV === 'development'

// 3、自定义axios
let request = axios.create({
  // 基础的请求地址
  baseURL: isDev ? '/api' : 'http://47.92.152.70'
})

// 4、给所有的请求添加头信息
// request.defaults.headers['token'] = localStorage.getItem('token')

// 4、使用axios的拦截器  ----  请求的拦截器  +  响应的拦截器
// http://www.axios-js.com/zh-cn/docs/#%E6%8B%A6%E6%88%AA%E5%99%A8

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 所有的请求都需要的字段，所有的请求添加loading效果
  // token
  config.headers['token'] = localStorage.getItem('token')
  return config;
});

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // 消除请求的loading效果
  return response;
});

// 5、暴露axios模块
export default request;
