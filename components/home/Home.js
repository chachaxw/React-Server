import React, { Component } from 'react';
import { logging } from 'react-server';
import Layout from '../common/Layout';
import BannerImg from "../common/BannerImg";
import MoreInfo from '../common/MoreInfo';
import Button from "../common/Button";
import PortfolioItem from "../common/PortfolioItem";
import '../common/styles.css';

const logger = logging.getLogger(__LOGGER__);

export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <BannerImg style={{backgroundImage: "url(public/images/banner-img.jpeg)"}}>
          <div className="banner-logo">
            <img src="public/images/chacha.png" />
          </div>
          <p>
              Hello, my name is Chacha, and Chinese name is 周伟😄.Welcome to my own website !
          </p>
          <div className="banner-buttons">
            <Button href="http://www.zcool.com.cn/u/2472864" target="_blank">Portfolio</Button>
            <Button href="http://github.com/chachaxw">Github</Button>
          </div>
        </BannerImg>
        <div className="home-about">
          <span className="about-user-head">
            <img src="public/images/user-head.jpg"/>
          </span>
          <div className="about-content">
            <h1>Chacha</h1>
            <h2>Front-end Developer & UI Designer</h2>
            <p>
                I am a front-end developer and UI designer, and I’m good at html5, css3, javascript, photoshop, illustrator, sketch. And I also know php, nodejs, after effect and so on, I can do a lot of creative things.
            </p>
          </div>
        </div>
        <MoreInfo>
          <div>
              <p>
                  If you want to know more about me,
                  <br />
                  you can
              </p>
              <Button href="http://www.google.com">
                  Get In Touch
              </Button>
              <p>
                  or go to
                  <a href="http://github.com/chachaxw" target="_blank">About</a>
              </p>
          </div>
        </MoreInfo>
        <div className="portfolio-box" {...this.props}>
          <h1>
            My Portfolio
          </h1>
          <PortfolioItem />
        </div>
        <MoreInfo style={{background: "#fff"}}>
          <div className="home-more-works">
            <p>
              You can see more design works in the <a href="">Portfolio</a> , if you need a designer or a front-end developer, you can get in touch me, I’ll aways be there.
            </p>
            <Button href="">
              More Works
            </Button>
          </div>
        </MoreInfo>
      </Layout>
    )
  }
}
