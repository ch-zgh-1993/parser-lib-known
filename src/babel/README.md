/*
* @Author: Zhang Guohua
* @Date:   2020-04-09 11:17:15
* @Last Modified by:   zgh
* @Last Modified time: 2020-04-09 15:58:54
* @Description: create by zgh
* @GitHub: Savour Humor
*/

# BABEL

BABEL 的 Plugin, 是在 工具之上，进行构建的。而预设(preset) 是多个插件打包的集合。



## BABEL 工具


- parser： 将源码转换为 AST
    + 词法分析
    + 语法分析
- generator: 将 AST 转换为 code
- traverse: 对 AST 的内容进行转换
- types: 用于 AST 的工具库。 
    + Babel Types模块是一个用于 AST 节点的 Lodash 式工具库 它包含了构造、验证以及变换 AST 节点的方法。 该工具库包含考虑周到的工具方法，对编写处理AST逻辑非常有用。
    + 创建节点：
    + 判断节点类型：
- template: 生成大段节点。



## 相关内容

- scopes: 作用域




## BABEL 插件

- 参数: babel, 可以通过解构赋值，获取到相应的工具参数。
    + 内容较多，可以打印出来看用到哪些
- 返回值： name, visitor {func(path, state(用户传参获取))}



## 插件示例

- 分析函数是否被调用的插件
