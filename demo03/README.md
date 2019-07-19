## 涉及到的知识
### Initialization阶段 
+ constructor : 不算生命周期函数,可以把它看成React的`Initialization`阶段，定义属性（props）和状态(state)
---

![reactLifeCycle]('./public/reactLifeCycle.png')
### Mounting阶段
+ componentWillMount和componentDidMount这两个生命周期函数，只在页面刷新时执行一次，而render函数是只要有state和props变化就会执行
`componentWillMount` : 在组件即将被挂载到页面的时刻执行。
`render` : 页面state或props发生变化时执行。
`componentDidMount` : 组件挂载完成时被执行。
---

### Updation阶段
+ 有两个基本部分组成，一个是props属性改变，一个是state状态改变
`shouldComponentUpdate` : 函数会在组件更新之前，自动被执行
`componentWillUpdate` : 在组件更新之前,但`shouldComponenUpdate`之后被执行。但是如果`shouldComponentUpdate返`回`false`，这个函数就不会被执行
`componentDidUpdate` : 在组件更新之后执行，它是组件更新的最后一个环节
`componentWillReceiveProps` : 子组件接收到父组件传递过来的参数，父组件render函数重新被执行，这个生命周期就会被执行,所以最顶层组件的这个生命周期不起作用
---

### Unmounting阶段
`componentWillUnmount` : 它是在组件去除时执行
---

### 组件性能问题
+ 在render的时候打印一下会发现每次输入框输入一个字符的时候都会重新render一遍,你也可以安装React Develop Tools插件之后，在设置里把Highlight Updates勾选上，然后在输入的时候发现下面的列表有闪动，说明有更新
``` javascript
render() {
        console.log('组件render了');
        return (
            <div>...</div>
        )
}
```

### 组件性能调优方案
利用`shouldComponentUpdate`解决
+ nextProps:变化后的属性;
+ nextState:变化后的状态;

``` javascript
shouldComponentUpdate(nextProps,nextState){
    if(nextProps.content !== this.props.content){
        return true
    }else{
        return false
    }
   
}
```
---

### 何时使用Component还是PureComponent？
`PureCompoent`是一个更具性能的`Component`的版本。但是这种性能的提高还伴随着一些附加的条件。让我们深挖一下`PureComponent`，并理解为什么我们应该使用它。
   + Component和PureComponent有一个不同点
   除了为你提供了一个具有浅比较的`shouldComponentUpdate`方法，`PureComponent`和`Component`基本上完全相同。当`props`或者`state`改变时，`PureComponent`将对`props`和`state`进行浅比较。另一方面，`Component`不会比较当前和下个状态的`props`和`state`。因此，每当`shouldComponentUpdate`被调用时，组件默认的会重新渲染
   + pureComponent也存在一些问题
   在PureComponent中，如果包含比较复杂的数据结构，可能会因深层的数据不一致而产生错误的否定判断，导致界面得不到更新。
   例如一个列表组件,这个问题会导致每次父组件`render`方法被调用时，一个新的函数被创建，已将其传入`likeComment`。这会有一个改变每个子组件`props`的副作用，它将会造成他们全部重新渲染，即使数据本身没有发生变化
   ``` javascript
    <CommentItem likeComment={() => this.likeComment(user.id)} />
   ```

   为了解决这个问题，只需要将父组件的原型方法的引用传递给子组件。子组件的likeComment属性将总是有相同的引用，这样就不会造成不必要的重新渲染。
   ``` javascript
    <CommentItem likeComment={this.likeComment} userID={user.id} />
   ```
   然后再子组件中创建一个引用了传入属性的类方法：
   ``` javascript
    class CommentItem extends PureComponent {
    ...
    handleLike() {
        this.props.likeComment(this.props.userID)
    }
    ...
    }
   ```