import React, { Component, useState, useEffect, createContext, useContext } from 'react';
import ListComponent1 from './demoItem1';
import ListComponent2 from './demoItem2';
import ListComponent3 from './demoItem3';
import ListComponent4 from './demoItem4';

// class Demo extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   createSomething = (item) => {
//     console.log(item);
//   }
//   ReadSomething = (item) => {
//     console.log(item);
//   }
//   updateSomething = (item) => {
//     console.log(item);
//   }
//   DestroySomething = (item) => {
//     console.log(item);
//   }
//   render() {
//     return (
//       <div>
//         <ListComponent1
//           createSomething={this.createSomething}
//           ReadSomething={this.ReadSomething}
//           updateSomething={this.updateSomething}
//           DestroySomething={this.DestroySomething}
//         />
//         <ListComponent2
//           createSomething={this.createSomething}
//           ReadSomething={this.ReadSomething}
//           updateSomething={this.updateSomething}
//           DestroySomething={this.DestroySomething}
//         />
//       </div>
//     )
//   }
// }
function Demo(props) {
  const createSomething = () => {
    console.log('createSomething');
  }
  const ReadSomething = () => {
    console.log('ReadSomething');
  }
  const updateSomething = () => {
    console.log('updateSomething');
  }
  const DestroySomething = () => {
    console.log('DestroySomething');
  }
  const setClicked = () => {
    console.log('12');
  }
  return (
    <div>
      <ListComponent3
        creatSomething={createSomething}
        readSomething={ReadSomething}
        updateSomething={updateSomething}
        destroySomething={DestroySomething}
      />
      <ListComponent4
        create={createSomething}
        read={ReadSomething}
        update={updateSomething}
        destroy={DestroySomething}
      />
    </div>
  )
}
export default Demo;