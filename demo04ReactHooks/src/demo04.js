import React, { Component, useState, useEffect, createContext, useContext } from 'react';

// // -----------------class写法-----------------
// class Demo extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { count:0 }
//     }
//     render() { 
//         return (
//             <div>
//                 <p>You clicked {this.state.count} times</p>
//                 <button onClick={this.addCount.bind(this)}>Chlick me</button>
//             </div>
//         );
//     }
//     addCount(){
//         this.setState({count:this.state.count+1})
//     }
// }
// export default Demo;


// // -----------------React Hooks写法-----------------
// function Demo(){
//     const [ count , setCount ] = useState(0);
//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={()=>{setCount(count+1)}}>click me</button>
//         </div>
//     )
// }
// export default Demo;


// // -----------------组件拆分越小性能越高-----------------
// class Demo extends Component {
//     constructor(props){
//         super(props) 
//         this.state={
//         }
//     };
//     render() { 
//         console.log('父组件render了');
//         return ( 
//             <MyInput />
//         );
//     }
// }
// class MyInput extends Component {
//     constructor(props){
//         super(props) 
//         this.state={
//             inputValue:'' , 
//         }
//     };
//     inputChange = (e) => {
//         this.setState({
//             inputValue:this.input.value
//         })
//     };
//     render() { 
//         console.log('子组件render了');
//         return ( 
//             <input value={this.state.inputValue} onChange={this.inputChange} ref={(input)=>{this.input=input}} />
//          );
//     }
// }
// export default Demo;
 
// -----------------HOC状态管理，把组件的状态提升到HOC中进行管理-----------------
// function Demo(WrappedComponent) {
//     return class extends Component {
//       constructor(props) {
//         super(props);
//         this.state = { value: '' };
//       }
  
//       onChange = (event) => {
//         const { onChange } = this.props;
//         this.setState({
//           value: event.target.value,
//         }, () => {
//           if(typeof onChange ==='function'){
//             onChange(event);
//           }
//         })
//       }
  
//       render() {
//         const newProps = {
//           value: this.state.value,
//           onChange: this.onChange,
//         }
//         return <WrappedComponent {...this.props} {...newProps} />;
//       }
//     }
// }
// class HOC extends Component {
//     render() {
//         return <input {...this.props}></input>
//     }
// }
// export default Demo(HOC);

// -----------------HOC多状态声明注意-----------------
// function Demo(){
//     const [ age , setAge ] = useState(18)
//     const [ sex , setSex ] = useState('男')
//     const [ work , setWork ] = useState('前端程序员')
//     return (
//         <div>
//             <p>JSPang 今年:{age}岁</p>
//             <p>性别:{sex}</p>
//             <p>工作是:{work}</p>
            
//         </div>
//     )
// }
// 会报错
// function Demo(){
//     const [ age , setAge ] = useState(18);
//     let showSex = true;
//     if(showSex){
//         const [ sex , setSex ] = useState('男')
//         showSex=false
//     }

//     const [ work , setWork ] = useState('前端程序员')
//     return (
//         <div>
//             <p>JSPang 今年:{age}岁</p>
//             <p>性别:{sex}</p>
//             <p>工作是:{work}</p>
            
//         </div>
//     )
// }
// export default Demo;

// -----------------useEffect代替常用生命周期函数-----------------
// function Demo() {
//     const [count, setCount] = useState(0);
//     const [number, setNumber] = useState(0);
//     useEffect(() => {
//         console.log('执行...', count);
//         return () => {
//             console.log('清理...', count);
//         }
//     });
//     // useEffect(() => {
//     //     console.log('执行...', number);
//     //     return () => {
//     //         console.log('清理...', number);
//     //     }
//     // }, [number]);
//     return (
//       <div>
//         <p>count: {count} </p>
//         <button onClick={() => { setCount(count + 1); }}>
//           Click count
//         </button>
//         <p>number: {number} </p>
//         <button onClick={() => { setNumber(number - 1); }}>
//           Click count
//         </button>
//       </div>
//     );
//   }
// export default Demo;

// -----------------useContext 父子组件传值-----------------
// const CountContext = createContext()
// function Demo(){
//     const [ count , setCount ] = useState(0);

//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={()=>{setCount(count+1)}}>click me</button>
//             <CountContext.Provider value={count}>
//                 <Counter />
//             </CountContext.Provider>
//         </div>
//     )
// }
// function Counter(){
//     const count = useContext(CountContext)  //一句话就可以得到count
//     return (<h2>{count}</h2>)
// }
// export default Demo;