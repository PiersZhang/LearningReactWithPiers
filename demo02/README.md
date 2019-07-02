#### 涉及到的知识
1. 书写更加快的jsx插件[Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=EQuimper.react-native-react-redux-snippets-for-es6-es7-version-standard)
2. 组件的拆分 父子组件传值
   + 父组件向子组件传递内容，靠属性的形式传递。如demo02.js向demoItem.js中传item值通过content属性
   + 子组件向父组件传值,React有明确规定，子组件时不能操作父组件里的数据的，所以需要借助一个父组件的方法，来修改父组件的内容
3. 函数的绑定bind、箭头函数、构造函数中绑定性能会高一些，特别是在高级组件开发中
4. 为什么子组件里不写constructor{super(props)}还是可以取到this.props???