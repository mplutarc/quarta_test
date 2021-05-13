const path = require('path')

module.exports = {
	entry: {
		main: path.resolve(__dirname, './js/index.js'),
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].bundle.js',
	}
}