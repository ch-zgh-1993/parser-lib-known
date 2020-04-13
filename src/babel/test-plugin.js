/*
* @Author: Zhang Guohua
* @Date:   2020-04-09 14:28:44
* @Last Modified by:   zgh
* @Last Modified time: 2020-04-09 15:50:01
* @Description: create by zgh
* @GitHub: Savour Humor
*/

// 插件测试
const babel = require('@babel/core')
import code from 'raw-loader!./1.js'

//  检查是否有没有用到的函数
const result = babel.transformSync(code, {
	plugins: [
		[require('./analysis-code'), {
	      param1: 'i am test param'
	    }]
	]
})
