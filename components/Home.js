import React, { Component } from 'react';
import { logging } from 'react-server';

const logger = logging.getLogger(__LOGGER__);

export default class Home extends Component {
  
    constructor(props) {
        super(props);
        this.state = {exclamationCount: 0};
    }

    handleClick = () => {
        logger.info(`Getting more excited! previously ${this.state.exclamationCount} excitements.`);
        this.setState({exclamationCount: this.state.exclamationCount + 1});
    };

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Home page is rendered By react-server!{'!'.repeat(this.state.exclamationCount)}</h1>
                <h2>Hello chacha</h2>
                <button onClick={this.handleClick}>Get More Excited!</button>
            </div>
        )
    }
}
