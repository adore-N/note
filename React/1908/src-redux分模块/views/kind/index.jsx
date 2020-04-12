import React, { Component } from 'react';
import store from '@/store'
export default class extends Component {
  render () {
    let { kind: { kindlist } } = store.getState()
    return (
      <div className="box">
        <header className = "header"></header>
        <div className = "content">
        分类
        </div>
      </div>
    )
  }
}