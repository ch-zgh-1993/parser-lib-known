/*
* @Author: Zhang Guohua
* @Date:   2020-04-08 19:27:02
* @Last Modified by:   zgh
* @Last Modified time: 2020-04-09 11:20:34
* @Description: create by zgh
* @GitHub: Savour Humor
*/

// 初步了解

// 从源码， 生成 AST  抽象语法树。
// parse (code, options)
// code: 代码输入

// options:
// sourceFilename: 'b.js'

const parser = require("@babel/parser")
import code from 'raw-loader!./1.js'

const AST = parser.parse(code, {
	sourceType: 'module',
  	plugins: [
  	  // enable jsx and flow syntax
  	  "jsx"
  	]
})

console.log(AST)


// 从 AST 转化为源码
// generate (ast, options, code)

const generate = require('@babel/generator').default

const Code = generate(AST).code
console.log(Code)


// Transform 转换 AST 中的内容，这里是主要的操作模块
// traverse (ast, visitor(操作对象))
// 操作对象：获取抽象语法树上的具体节点的方法集合。
// path: 对应节点树上的节点，可以对节点进行访问和操作。 path.parent 是父节点。
// path: 

const traverse = require('@babel/traverse').default

const visitor = {
	enter (path) {
		if (path.isIdentifier({ name: 'a' })) {
	      	path.node.name = 'x'
	    }
	}
}
// 转换 AST 中的内容
traverse(AST, visitor)

// 打印转换后的代码
console.log(generate(AST).code)