/*
* @Author: Zhang Guohua
* @Date:   2020-04-09 14:20:21
* @Last Modified by:   zgh
* @Last Modified time: 2020-04-09 16:20:02
* @Description: create by zgh
* @GitHub: Savour Humor
*/


// 分析函数是否被调用的插件

export default function (babel) {
	console.log(babel)

	const {
		types: t
	} = babel

	// 存放函数，及对应的调用信息。 key 为 函数名， value 为调用次数。
	const funcUse = {}

	const visitor = {
		Program: {
			exit () {
				console.log(funcUse)
				for(let k in funcUse) {
					funcUse[k] === 0 && (console.warn(`the function name ${k} is never use, please delete.`))
				}
			}
		},
		FunctionDeclaration (p) {
			funcUse[p.node.id.name] !== undefined ? 0 : funcUse[p.node.id.name] = 0
		},
		CallExpression (p) {
			if (p.scope.hasBinding(p.node.callee.name)) {
				funcUse[p.node.callee.name] !== undefined ? funcUse[p.node.callee.name]++ : funcUse[p.node.callee.name] = 1
			} else {
				throw p.buildCodeFrameError('the function name ${k} is not defined');
			}
		}
	}

	return {
		name: 'babel-plugin-zgh-analysisi-code',
		visitor
	}
}
