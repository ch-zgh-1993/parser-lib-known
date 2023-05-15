/*
* @Author: Zhang Guohua
* @Date:   2020-04-08 17:31:44
* @Last Modified by:   zgh
* @Last Modified time: 2020-04-08 17:35:22
* @Description: create by zgh
* @GitHub: Savour Humor
*/


# base

了解了编译过程的一些知识，那么在实际使用时，或者已有的库，是怎么运用编译原理，AST 来解决实际的问题？这个项目主要是了解已有的 parse 如何使用 AST, 如何实现 parse, 从而获取一个实际运用中的轮廓，以及吸取相应的经验，对比，优化等可能的知识。



## 库

- babel
  - tool-packages
    - parser: 将代码段，转换为 AST 语法树的node。 完成词法分析动作
    - generate： 将 AST 语法书转化为 js 代码
    - traverse: 操作语法树的内容，这里做代码转换等工作
      - path 对象操作方法