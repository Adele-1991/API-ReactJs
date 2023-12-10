import React, { Component } from 'react';
import CompFetch from "./components/Comp4Fetch";
import style from "./styles/style.module.css";
 class App2 extends Component {
  state = {  } 
  render() { 
    return (
      <div className={style.box1}>
        <CompFetch/>
        
      </div>
    );
  }
 }
  
 export default App2; 