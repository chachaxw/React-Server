const path = require('path');

module.exports = {
	routes: {
		Home: {
			path: ['/'],
			method: 'get',
			page: path.join('.', 'pages', 'home'),
		},
	},
};
