import React from 'react';
import Home from '../components/Home';

export default class SimplePage {
	getElements() {
		return <Home/>;
	}

	getMetaTags() {
		return [
			{charset: 'utf8'},
			{'http-equiv': 'x-ua-compatible', 'content': 'ie=edge'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{name: 'description', content: 'hello world, powered by React Server'},
			{name: 'generator', content: 'React Server'},
		];
	}
}
