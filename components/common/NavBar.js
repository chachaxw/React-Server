import React, { Component } from 'react';
import '../../../public/less/App.less';
import TapMenu from './TapMenu';

export default class NavBar extends Component{

    render(){
        return (
            <nav className="nav-bar">
                <div>
                    <div span="12" className="nav-logo">
                        <a href="/">
                            <img src="public/images/nav-logo.svg" />
                        </a>
                    </div>
                    <div span="12" className="nav-menu">
                        <ul>
                            <li><a href="/" className="nav-active">Home</a></li>
                            <li>
                                <Link to="works">Works</Link>
                            </li>
                            <li>
                                <Link to="about">About</Link>
                            </li>
                            <li><a href="http://github.com/chachaxw" target="_blank">Github</a></li>
                        </ul>
                    </div>
                </div>
                <TapMenu />
            </nav>
        )
    }
};
