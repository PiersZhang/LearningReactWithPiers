import React, { Component } from 'react';
import DemoItem from './demoItem';
// import {App} from './App.js';

class Demo extends Component {
    constructor(props){
        super(props) //调用父类的构造函数，固定写法
        this.state={
            inputValue:'' , // input中的值
            //----------主要 代码--------start
            list:['基础按摩','精油推背']   
            //----------主要 代码--------end
        }
    };
    inputChange = (e) => {
        // this.state.inputValue=e.target.value; // 不能直接给state里的值赋值
        this.setState({
            // inputValue:e.target.value
            inputValue:this.input.value
        })
    };
    // 新增一条数据
    addList = () => {
        this.setState({
            inputValue:'' , // 添加一条数据后自动清空input中的内容
            list:[...this.state.list,this.state.inputValue]
        }, () => {
            console.log(this.ul.querySelectorAll('li').length);
        })
        console.log(this.ul.querySelectorAll('li').length);
    }
    // 删除一条数据
    deleteItem = (index, e) => {
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })    
    }
    render() {
        return (
            <div>
                <div>
                    {/* <input value={this.state.inputValue} onChange={this.inputChange} /> */}
                    <input value={this.state.inputValue} onChange={this.inputChange} ref={(input)=>{this.input=input}} />
                    <button onClick={this.addList}> 增加服务 </button>
                </div>
                <ul ref={(ul)=>{this.ul=ul}}>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                // <li 
                                //     key={index+item}
                                //     onClick={this.deleteItem.bind(this,index)}
                                //     dangerouslySetInnerHTML={{__html:item}}
                                // >
                                // </li>
                                <DemoItem 
                                    key={index+item} 
                                    content={item} 
                                    index={index} 
                                    deleteItem={this.deleteItem}>
                                </DemoItem>
                            )
                        })
                    }
                </ul> 
            </div>
        );
    }
}
 
export default Demo;