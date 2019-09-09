## React Hooks
   + 2018年底FaceBook的React小组推出Hooks以来，所有的React的开发者都对它大为赞赏。React Hooks就是用函数的形式代替原来的继承类的形式，并且使用预函数的形式管理state，有Hooks可以不再使用类的形式定义组件了。这时候你的认知也要发生变化了，原来把组件分为有状态组件和无状态组件，有状态组件用类的形式声明，无状态组件用函数的形式声明。那现在所有的组件都可以用函数来声明了。
   + 从class和React Hooks两种写法的对比上可以看出Hooks本质上就是一类特殊的函数，他们可以为你的函数型组件（function component）注入一些特殊的功能。这听起来有点像以前React中的Mixins差不多哦。其实是由很多不同，hooks的目的就是让你不再写class，让function一统江湖。
   + [从MixIn到HOC到Hooks](https://juejin.im/post/5cad39b3f265da03502b1c0a#heading-2)

### useState
   + `useState`是`react`自带的一个`hook`函数，它的作用是用来声明状态变量。
   + 多状态声明的注意事项（React Hooks不能出现在条件判断语句中，因为它必须有完全一样的渲染顺序。）
   ``` javascript
    import React, { useState } from 'react';

    let showSex = true
    function Demo(){
        const [ age , setAge ] = useState(18)
        // 会报错
        if(showSex){
            const [ sex , setSex ] = useState('男')
            showSex=false
        }
    
        const [ work , setWork ] = useState('前端程序员')
        return (
            <div>
                <p>JSPang 今年:{age}岁</p>
                <p>性别:{sex}</p>
                <p>工作是:{work}</p>
                
            </div>
        )
    }
    export default Demo;
   ```
   + `useEffect`代替常用生命周期函数
      + 1.回调函数：在第组件一次render和之后的每次update后运行，React保证在DOM已经更新完成之后才会运行回调。
      + 2.状态依赖(数组)：当配置了状态依赖项后，只有检测到配置的状态变化时，才会调用回调函数。
      ```javascript
       useEffect(() => {
           // 只要组件render后就会执行
       });
       useEffect(() => {
           // 只有count改变时才会执行
       },[count]);
      ```
   ```javascript
    import React, { useState , useEffect } from 'react';
    export default function Demo() {
        const [count, setCount] = useState(0);
        useEffect(() => {
            console.log('执行...', count);
            return () => {
            console.log('清理...', count);
            }
        }, [count]);
        return (
            <div>
            <p>You clicked {count} times</p>
            <button onClick={() => { setCount(count + 1); setNumber(number + 1); }}>
                Click me
                </button>
            </div>
        );
    }
   ```
   `useEffect`的第一个参数可以返回一个函数，当页面渲染了下一次更新的结果后，执行下一次`useEffect`之前，会调用这个函数。这个函数常常用来对上一次调用`useEffect`进行清理
   + 那么为什么在浏览器渲染完后，再执行清理的方法还能找到上次的state呢？
   因为我们在useEffect中返回的是一个函数，这形成了一个闭包，这能保证我们上一次执行函数存储的变量不被销毁和污染。
   可以理解成这样：
   ```javascript
    var flag = 1;
    var clean;
    function effect(flag) {
      return function () {
        console.log(flag);
      }
    }
    clean = effect(flag);
    flag = 2;
    clean();
    clean = effect(flag);
    flag = 3;
    clean();
    clean = effect(flag);

    // 执行结果
    effect... 1
    clean... 1
    effect... 2
    clean... 2
    effect... 3
   ```
   + 模拟componentWillUnmount（不像 componentDidMount 或者 componentDidUpdate，useEffect中的函数是异步的，并不会阻滞浏览器渲染页面。这让你的 app 看起来更加流畅）
   ```javascript
    function useUnMount(callback) {
        useEffect(() => callback, []);
    }
   ```
   + componentDidMount（官方不推荐上面这种写法，因为这有可能导致一些错误）
   ```javascript
    function useDidMount(callback) {
        useEffect(callback, []);
    }
   ```


