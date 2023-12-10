import React, { Component } from "react";
import style from "../styles/style.module.css";
import axios from "axios";

class Comp3Axios extends Component {
  constructor(props){
    super(props);
    this.state ={
      postId:0,
    }
  }
  deletePostHandler=()=>{
const {postId}=this.state;
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response=>console.log(response));

}
  
  changeInputHandler=(event)=>{
this.setState({[event.target.name]:event.target.value});
  }
  render() {
    const {postId}=this.State;
    return (
      <>
        <div className={style["form-control"]}>
        
          Post Id:
          <input type="number" name="postId" value={postId} onChange={this.changeInputHandler}/>
        </div>
        <div className={style["form-control"]}>
        
       <button onClick={this.deletePostHandler}>Delete Post</button>
      </div>
      postId:{postId}
      </>
    );
  }
}
export default Comp3Axios;
