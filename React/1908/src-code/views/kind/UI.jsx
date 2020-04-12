import React, { Component } from 'react';

export default class extends Component {
  render () {
    let { kindlist } = this.props
    return (
      <div className="box">
        <header className = "header"></header>
        <div className = "content">
          {
            kindlist.map((item, index) => (
              <p key = { index }> { item } </p>
            ))
          }
        </div>
      </div>
    )
  }
}