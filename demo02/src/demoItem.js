import React, { Component } from 'react';

class DemoItem extends Component {
    constructor(props){
        super(props)
        // 构造函数中绑定性能会高一些，特别是在高级组件开发中
        // this.handleClick=this.handleClick.bind(this)
    }
    handleClick = () => {
        this.props.deleteItem(this.props.index)
    }
    render() { 
        return ( 
            <li onClick={this.handleClick}>{this.props.content}</li>
         );
    }
}
 
export default DemoItem;