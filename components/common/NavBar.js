import React, { Component } from 'react';
import TapMenu from './TapMenu';

export default class NavBar extends Component{
  render(){
    return (
      <nav className="nav-bar">
        <div>
          <div className="nav-logo">
            <a href="/">
              <img src="public/images/nav-logo.svg" />
            </a>
          </div>
          <div className="nav-menu">
            <ul>
              <li>
                <a href="/" className="nav-active">Home</a>
              </li>
              <li>
                  <a href="/">Works</a>
              </li>
              <li>
                  <a href="/">About</a>
              </li>
              <li>
                <a href="http://github.com/chachaxw" target="_blank">Github</a>
              </li>
            </ul>
          </div>
        </div>
        <TapMenu />
      </nav>
    )
  }
};
