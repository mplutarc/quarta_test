const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		'./src/index.js',
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
			{
				test: /\.css$/,
				use: [{
					// inject CSS to page
					loader: 'style-loader'
				}, {
					// translates CSS into CommonJS modules
					loader: 'css-loader'
				}]
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({ // inject ES5 modules as global vars
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			Popper: ['popper.js', 'default']
		}),
		new HtmlWebpackPlugin()
	]
};