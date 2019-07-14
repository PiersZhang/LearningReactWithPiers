import React, { Component } from 'react';
import PropTypes from 'prop-types'
class DemoItem extends Component {
    static propTypes={
        content:PropTypes.string,
        deleteItem:PropTypes.func,
        index:PropTypes.number,
    }
    static defaultProps={
        avname:'苍老师'
    }
    constructor(props){
        super(props)
        // 构造函数中绑定性能会高一些，特别是在高级组件开发中
        this.handleClick = this.handleClick.bind(this);
        
    }
    
    handleClick () {
        this.props.deleteItem(this.props.index)
    }
    render() { 
        return ( 
            <li onClick={this.handleClick}>
                {this.props.avname} 为你做 {this.props.content}
            </li>
         );
    }
}
// DemoItem.propTypes={
//     content:PropTypes.string,
//     deleteItem:PropTypes.func,
//     index:PropTypes.number
// }
// DemoItem.defaultProps = {
//     avname:'松岛枫'
// }
export default DemoItem;