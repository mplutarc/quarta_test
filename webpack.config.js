const path = require('path');
const {webpack} = require("webpack");

module.exports = {
	entry: [
		'./js/index.js',
	],
	output: {
		filename: './bundle.js'
	},
	devtool: "source-map",
	module: {
		rules: [{
			test: /\.js$/,
			include: path.resolve(__dirname, 'js'),
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		},
		]
	},
	plugins: [
		new webpack.ProvidePlugin({ // inject ES5 modules as global vars
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			Popper: ['popper.js', 'default']
		})
	]
};