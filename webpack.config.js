const path = require('path');

module.exports = {
	target: 'node', 
	entry: './client/src/index.jsx',
	output: {
		filename: 'bundle.js',
	path: path.resolve(__dirname,'public')
	},
	module: {
		rules: [{
			test:/\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			}]
	}
};
