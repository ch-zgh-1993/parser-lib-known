/*
* @Author: Zhang Guohua
* @Date:   2020-04-08 18:49:18
* @Last Modified by:   zgh
* @Last Modified time: 2020-04-09 14:42:27
* @Description: create by zgh
* @GitHub: Savour Humor
*/

const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
  	entry: {
  		app: './src/index.js'
  	},
  	devServer: {
     contentBase: './dist'
    },
    devtool: 'inline-source-map',
  	plugins: [
  		new CleanWebpackPlugin(),
  		new HtmlWebpackPlugin({
	        title: '管理输出'
	    })
    ],
    output: {
      	filename: '[name].bundle.js',
      	path: path.resolve(__dirname, 'dist')
    },
    module: {
	    rules: [
	      	{
	        	test: /\.txt$/,
	        	use: 'raw-loader'
	      	}
	    ]
	},
	node: {
		fs: 'empty'
	}
}