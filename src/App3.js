import React, { Component } from 'react';
import Comp5Axios from "./components/Comp5Axios";
import style from "./styles/style.module.css";

 class App extends Component {
  render() { 
    return (
      <div className={style.box1}>
        <Comp5Axios/>
        
      </div>
    );
  }
 }
  
 export default App; 