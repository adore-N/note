# 1、回顾

# 2、状态管理器

> redux 

> redux + redux-thunk (redux-promise/redux-saga)

> redux + redux-thunk + react-redux

> redux + react-redux

> mobx + mobx-react

# 3、redux - 整合

> cnpm i redux redux-thunk react-redux -S

* src文件夹下创建 store/index.js

```
// 1、引入对应的模块
import { createStore } from 'redux';

// 2、创建纯函数，用来存放应用需要的状态 ----- 必须给返回值
// 纯函数有两个参数
// state 代表应用的初始化装填
// action 代表的是改变state触发的行为
const reducer = () => {
  
}

// 3、创建仓库
const store = createStore(reducer);

// 4、暴露仓库
export default store;
```

* 纯函数reducer

```
// 2、创建纯函数，用来存放应用需要的状态 ----- 必须给返回值
// 纯函数有两个参数
// state 代表应用的初始化装填
// action 代表的是改变state触发的行为
const reducer = (state = {
  bannerlist: [],
  prolist: [],
  cartlist: []
}, action) => {
  // type 表示要改变哪一个初始化数据的标识
  // data 表示需要改变的数据
  const { type, data } = action;
  // 条件判断 改变状态 依靠对象合并
  switch (type) {
    case 'CHANGE_BANNER_LIST':
      return Object.assign({}, state, { bannerlist: data });
    case 'CHANGE_PRO_LIST':
      return {...state, ...{prolist: data}};
    case 'CHANGE_CART_LIST':
      return Object.assign({}, state, { cartlist: data });
    default:
      return state;
  }
}
```

* 入口文件处使用 仓库 index.js
```
import store from './store';

function render () {
  ReactDOM.render(
    <Router>
      <Switch>
        <Route path="/" component = { App } />
      </Switch>
    </Router>,
    document.getElementById('root')
  )
}
render()

// 检测到状态管理器状态发生改变，重新执行render函数
// 状态的改变引起视图的二次渲染
store.subscribe(render)
```

* 页面处获取状态或者改变状态

views/home/index.jsx
```
import React, { Component } from 'react';
import store from '@/store'; // +++++++++++++++++++++
import { getBannerlist, getProlist } from '@/utils/api' // ++++++++++++++++
export default class extends Component {
  componentDidMount () {
    console.log(store)
    // console.log(store.getState()) // ++++++++++++++++++++++++++++
    getBannerlist().then(data => {
      // 改变状态管理器状态
      store.dispatch({ // +++++++++++++++++++++++++++++++++++++
        type: 'CHANGE_BANNER_LIST',
        data: data.data
      })
    })
    getProlist().then(data => {
      store.dispatch({
        type: 'CHANGE_PRO_LIST',
        data: data.data
      })
    })
  }
  render () {
    console.log(store.getState())
    let { bannerlist, prolist } = store.getState() // +++++++++++++
    return (
      <div className="box">
        <header className = "header"></header>
        <div className = "content">
          {
            bannerlist.map(item => {
              return (
                <p key={ item.bannerid }>{ item.img }</p>
              )
            })
          }
          {
            prolist.map(item => {
              return (
                <p key={ item.proid }>{ item.proname }</p>
              )
            })
          }
        </div>
      </div>
    )
  }
}
```
此时发现解决了问题，但是所有的状态都在一个文件的内部，在某些需求时不合理，可以将状态按照模块划分
views/home/store.js views/cart/store.js 

# 4、redux + react-redux

redux 负责状态 ---- 属于js的状态管理模式

react-redux redux在react中的一个插件

* store/index.js 不用改变

```
import { createStore } from 'redux';

const reducer = (state = {
  bannerlist: [],
  prolist: [],
  cartlist: []
}, action) => {
  const { type, data } = action;
  switch (type) {
    case 'CHANGE_BANNER_LIST':
      return { ...state, ...{ bannerlist: data } }
    case 'CHANGE_PRO_LIST':
      return { ...state, ...{ prolist: data } }
    case 'CHANGE_CART_LIST':
      return { ...state, ...{ cartlist: data } }
    default:
      return state
  }
}

const store = createStore(reducer);

export default store;

```

* 入口页面处改变
```
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store = { store }>
    <Router>
      <Switch>
        <Route path="/" component = { App } />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)
```

* 组件的改变  ----   页面组件的改变

react-redux 将页面分为 容器组件和UI组件，容器组件负责 页面的业务逻辑，UI组件只负责 渲染组件

容器组件由UI组件生成，容器组件负责提供UI组件的数据以及执行UI组件需要的业务逻辑

views/home/UI.jsx   ----   UI组件 -----   通常写的页面
```
// UI组件
import React, { Component } from 'react';

class Com extends Component {
  componentDidMount () {}
  render () {
    return (
      <div className="box">
        <header className="header">头部</header>
        <div className="content">内容</div>
      </div>
    )
  }
}

export default Com;
```

views/home/index.jsx  ---- 容器组件 ------ 状态以及业务逻辑
```
// 容器组件
import { connect } from 'react-redux';
import UI from './UI';

const Com = connect()(UI);

export default Com;

```

**ui组件不做任何的业务逻辑处理**

* 容器组件获取状态管理器中的数据，UI组件通过this.props访问数据

views/home/index.jsx
```
// 容器组件 --- connect --- react的高阶组件
import { connect } from 'react-redux';
import UI from './UI';

// 获取状态管理器中的数据 --- 必有返回值 ++++++++++++++++++++++++++++
const mapStateToProps = (state) => { // state 是全部的状态
  // state { bannerlist: [], prolist: [], cartlist: [] }
  return {
    bannerlist: state.bannerlist,
    prolist: state.prolist
  }
}

const Com = connect(mapStateToProps)(UI); // +++++++++++++++++++++++++

export default Com;

```

views/home/UI.jsx
```
render () {
  // UI组件内部通过this.props获取容器组件提供的数据
  let { bannerlist, prolist } = this.props; // ++++++++++++++++
  console.log('bannerlist', bannerlist)
  console.log('prolist', prolist)
  return (
    <div className="box">
      <header className="header">头部</header>
      <div className="content">内容</div>
    </div>
  )
}
```

* 容器组件 实现 UI组件需要的业务逻辑，请求数据改变 bannerlist 以及 getProlist

views/home/index.jsx
```
import { getBannerlist, getProlist } from '@/utils/api'

// 设计UI组件需要使用的业务逻辑 -- 必有返回值
const mapDispatchToProps = (dispatch) => { // store.dispatch
  return {
    getBannerlist () { // ui组件通过 this.props.getBannerlist() 调用触发
      console.log('请求轮播图数据')
      getBannerlist().then(data => {
        dispatch({ // 更改状态管理器中的数据
          type: 'CHANGE_BANNER_LIST',
          data: data.data
        })
      })
    },
    getProlist () {// ui组件通过 this.props.getProlist() 调用触发
      console.log('请求列表数据')
      getProlist().then(data => {
        dispatch({
          type: 'CHANGE_PRO_LIST',
          data: data.data
        })
      })
    }
  }
}


const Com = connect(mapStateToProps, mapDispatchToProps)(UI); // +++++++
```
views/home/UI.jsx

```
// UI组件
import React, { Component } from 'react';

class Com extends Component {
  componentDidMount () {
    this.props.getBannerlist(); // ++++++++++++++++++++
    this.props.getProlist(); // ++++++++++++++++
  }
  render () {
    console.log(this.props)
    // UI组件内部通过this.props获取容器组件提供的数据
    let { bannerlist, prolist } = this.props;
    console.log('bannerlist', bannerlist)
    console.log('prolist', prolist)
    return (
      <div className="box">
        <header className="header">头部</header>
        <div className="content">
          {
            bannerlist.map(item => (
              <p key={ item.bannerid }>{ item.img }</p>
            ))
          }
          {
            prolist.map(item => (
              <p key={ item.proid }>{ item.proname }</p>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Com;
```

