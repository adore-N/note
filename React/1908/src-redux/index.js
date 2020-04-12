import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
