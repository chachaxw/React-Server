import React, { Component } from 'react';

export default class TapMenu extends Component{
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      height: "0",
      icon: "iconfont icon-menu"
    }
  }

  handleClick() {
    const isToggled = this.state.toggle;

    if ( !isToggled ) {
      this.setState(
        {
          toggle: true,
          height: "166px",
          icon: "iconfont icon-close"
        }
      )
    } else {
      this.setState(
        {
          toggle: false,
          height: "0",
          icon: "iconfont icon-menu"
        }
      )
    }
  }

  render() {
    return (
      <div className="tap-menu">
        <div className="nav-logo">
          <a href="">
            <img src="public/images/nav-logo.png" />
          </a>
        </div>
        <span className="tap-menu-button">
          <i className={this.state.icon} onClick={this.handleClick}></i>
        </span>
        <div className="tap-menu-list" data-toggle={this.state.toggle}>
          <ul style={{height: this.state.height}}>
            <li>
              <a href="" className="nav-active">Home</a>
            </li>
            <li>
              <a>Works</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a href="http://github.com/chachaxw" target="_blank">Github</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
};
