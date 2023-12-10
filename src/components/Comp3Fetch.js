import React, { Component } from 'react';

class Comp3Fetch extends Component {
  insertPostHandler=()=>{
    const url="https://jsonplaceholder.typicode.com/posts";
    const method="POST";
    const body=JSON.stringify({
        userID:101,
        title:"Post Title",
        body:"Post Body Post Body Post Body "});
        const headers=  {"Content-type":"application/json; charset=UTF-8"};
fetch(url,{method: method, body:body,headers:headers})
.then((response)=>response.json()).then((json)=>console.log(json));
  };
    render() { 
        return (
           <>
           <div>
            <button onClick={this.insertPostHandler}>
                Insert Post</button></div></>
        );
    }
}
 
export default Comp3Fetch;