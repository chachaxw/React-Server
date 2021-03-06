import React, { Component } from 'react';

class SocialTips extends Component{
  render() {
    const src = "public/images/qrcode.png";
    return (
      <div className="tips-box">
        <div className="tips-img">
          <img src={src}/>
        </div>
        <div className="tips-info">
          <p>
            Scan the QRCode!
          </p>
          <i className="iconfont icon-scan"></i>
        </div>
      </div>
    )
  }
};

export default class Footer extends Component{

  render() {
    return (
      <footer className="footer">
        <div className="footer-logo">
          <a href="/"><img src="public/images/nav-logo.svg" /></a>
        </div>
        <nav className="footer-nav">
          <ul className="clearfix">
            <li>
              <a href="/">Home</a>
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
        </nav>
        <div className="footer-social-icon">
          <i className="iconfont icon-weixin"></i>
          <SocialTips />
        </div>
        <div className="footer-info">
          CopyRight © 2016. All Rights Reserved.
        </div>
      </footer>
    )
  }
};
