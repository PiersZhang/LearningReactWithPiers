import React, { useState } from 'react';
import './index.css';

export default class ListComponent1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
       lastClickedButton: ''
    };
  }

  render() {
   return (
     <div>
       <h3>点击按钮为： {this.state.lastClickedButton}</h3>
       <ul>
        <li>
         <button
           onClick={() => {
            this.setState({ lastClickedButton: 'Create' });
            this.props.createSomething(this.state.lastClickedButton);
           }}
           className="my-button">
           Create
          </button>
         </li>
        <li>
          <button
            onClick={() => {
             this.setState({ lastClickedButton: 'Read' });
             this.props.readSomething(this.state.lastClickedButton);
            }}
            className="my-button">
            Read
          </button>
         </li>
         <li>
          <button
            onClick={() => {
             this.setState({ lastClickedButton: 'Update' });
             this.props.updateSomething(this.state.lastClickedButton);
            }}
            className="my-button">
            Update
          </button>
         </li>
         <li>
          <button
            onClick= {() => {
             this.setState({ lastClickedButton: 'Destroy' });
             this.props.destroySomething(this.state.lastClickedButton);
            }}
            className="my-button">
            Destroy
          </button>
        </li>
      </ul>
    </div>
  );
 }
}
