import React from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Home from '@/views/home';
import Kind from '@/views/kind';
import Cart from '@/views/cart';
import User from '@/views/user';
function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="/home" component = { Home } />
        <Route path="/kind" component = { Kind } />
        <Route path="/cart" component = { Cart } />
        <Route path="/user" component = { User } />
        <Redirect exact from="/" to="/home" />
      </Switch>
      <footer className = "footer">
        <ul>
          <NavLink to="/home" activeClassName="active">
            <span className="iconfont icon-fonts-shouye"></span>
            <p>首页</p>
          </NavLink>
          <NavLink to="/kind" activeClassName="active">
            <span className="iconfont icon-icon"></span>
            <p>分类</p>
          </NavLink>
          <NavLink to="/cart" activeClassName="active">
            <span className="iconfont icon-gouwuche"></span>
            <p>购物车</p>
          </NavLink>
          <NavLink to="/user" activeClassName="active">
            <span className="iconfont icon-wode"></span>
              <p>我的</p>
          </NavLink>
        </ul> 
      </footer>
    </div>
  );
}

export default App;
