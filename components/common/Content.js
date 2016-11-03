import React, { Component } from 'react';
import '../../../public/less/App.less';

export default class Content extends Component{
  render() {
    return (
      <div className="content" {...this.props}>
        {this.props.children}
      </div>
    )
  }
}
