#### 涉及到的知识
1. 书写更加快的jsx插件[Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=EQuimper.react-native-react-redux-snippets-for-es6-es7-version-standard)
2. 组件的拆分 父子组件传值
   1. 父组件向子组件传递内容，靠属性的形式传递。如demo02.js向demoItem.js中传item值通过content属性
   2. 子组件向父组件传值,React有明确规定，子组件时不能操作父组件里的数据的，所以需要借助一个父组件的方法，来修改父组件的内容
3. 函数的绑定bind、箭头函数、构造函数中绑定性能会高一些，特别是在高级组件开发中
   1. **使用React.createClass**
   react15及一下版本中，提供React.createClass函数来创建一个组件，在里面创建的所有的函数的this都会自动绑定到组件上
```
const App = React.createClass({
    handleClick() {
        console.log('this > ', this); // this 指向App组件本身
    },
    render() {
        return (
            <div onClick={this.handleClick}>test</div>
        );
    }
});
```
   2. **render方法中使用bind**
   由于组件每次执行render将会重新分配函数这将会影响性能。特别是在你做了一些性能优化之后，它会破坏PureComponent性能。不推荐使用
```
class App extends React.Component {
    handleClick() {
        console.log('this > ', this);
    }
    render() {
        return (
            <div onClick={this.handleClick.bind(this)}>test</div>
        )
    }
}
```
    3. **render方法中使用箭头函数**
    使用了ES6的上下文绑定来让this指向当前组件，但是它同第2种存在着相同的性能问题，不推荐使用
```
class App extends React.Component {
    handleClick() {
        console.log('this > ', this);
    }
    render() {
        return (
            <div onClick={e => this.handleClick(e)}>test</div>
        )
    }
}
```
    4. **构造函数中bind**
    为了避免在render中绑定this引发可能的性能问题，我们可以在constructor中预先进行绑定。
```
class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log('this > ', this);
    }
    render() {
        return (
            <div onClick={this.handleClick}>test</div>
        )
    }
}
```
    5. **在定义阶段使用箭头函数绑定**
    要使用这个功能，需要在.babelrc种开启[stage-2](https://www.cnblogs.com/chris-oil/p/5717544.html)功能，避免了第2种和第3种的可能潜在的性能问题，避免了第4种绑定时大量重复的代码
```
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick = () => {
        console.log('this > ', this);
    }
    render() {
        return (
            <div onClick={this.handleClick}>test</div>
        )
    }
}
```
    6. **总结**
    如果你使用ES6和React 16以上的版本，最佳实践是使用第5种方法来绑定`this`
4. Chrome插件`React developer tools`，从此告别low比的console.log
5. React高级-PropTypes校验传递值 ,可以用[typescript](https://www.typescriptlang.org/)和[flow](https://flow.org/)代替
```
import PropTypes from 'prop-types'
```
```
demoItem.propTypes={
    content:PropTypes.string,
    deleteItem:PropTypes.func,
    index:PropTypes.number
}
```
6. ref使用中的坑
    实这个坑是因为`React`中的`setState`是一个异步函数所造成的。也就是这个`setState`，代码执行是有一个时间的，如果你真的想了解清楚，你需要对什么是虚拟DOM有一个了解。简单的说，就是因为是异步，还没等虚拟Dom渲染，我们的`console.log`就已经执行了。
```
addList(){
    this.setState({
        list:[...this.state.list,this.state.inputValue],
        inputValue:''
    })
    console.log(this.ul.querySelectorAll('div').length); // 打印出来比真实数据少一个
}
```
    **解决方法**
    `setState`方法提供了一个回调函数，也就是它的第二个函数。下面这样写就可以实现我们想要的方法了
```
addList(){
    this.setState({
        list:[...this.state.list,this.state.inputValue],
        inputValue:''
    },()=>{
        console.log(this.ul.querySelectorAll('div').length)
    })
}
```