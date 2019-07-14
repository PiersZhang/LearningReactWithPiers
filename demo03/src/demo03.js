import React, { Component } from 'react';
import DemoItem from './demoItem';
// import {App} from './App.js';

class Demo extends Component {
    constructor(props){
        super(props) 
        this.state={
            inputValue:'' , 
            list:['基础按摩','精油推背']   
        }
    };
    inputChange = (e) => {
        this.setState({
            inputValue:this.input.value
        })
    };
    // 新增一条数据
    addList = () => {
        this.setState({
            inputValue:'' ,
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
        console.log('组件render了');
        return (
            <div>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange} ref={(input)=>{this.input=input}} />
                    <button onClick={this.addList}> 增加服务 </button>
                </div>
                <ul ref={(ul)=>{this.ul=ul}}>
                    {
                        this.state.list.map((item,index)=>{
                            return (
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