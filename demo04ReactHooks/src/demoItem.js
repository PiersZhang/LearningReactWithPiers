import React, { Component, useState, useEffect, createContext, useContext } from 'react';
const CountContext = useContext()
function Counter(){
    const count = useContext(CountContext)  //一句话就可以得到count
    return (<h2>{count}</h2>)
}
export default Counter