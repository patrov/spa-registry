const path = require('path');
webpack = require("webpack")

module.exports = {
	entry: {
		angular: "./hello-angular/src/main.ts"
	},
	output: {
		filename:"./dist/[name].js"
	},

	module: {
		rules: [
				  {
				    test: /\.ts$/,
				    loader: 'awesome-typescript-loader'
				  },
				  {
				    test: /\.css$/,
				    loaders: 'style-loader!css-loader'
				  }
			],
	},

	plugins: []
}