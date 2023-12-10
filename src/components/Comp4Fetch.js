import React, { Component } from 'react';
import Post from './posts';

class Comp4Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error:null,
    };
  }
  getPostsHandler = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => 
      {
if (response.ok){
  return response.json();
} throw new Error("عدم دسترسی به سرور");
 
})
      
      .then((json) => this.setState({ posts: json }))
      .catch((error)=>{this.setState({error:error})});
  };
  componentDidMount(){
    this.getPostsHandler();
  }
  deletePostHandler=(pid)=>{
    const url=`https://jsonplaceholder.typicode.com/posts/${pid}`;
    const method="DELETE";

fetch(url,{method: method})
.then((response)=>response.json()).then((json)=>console.log(json));
  };
  render() {
    return (
      <>
        <div>
          {this.state.error ? <h2>{this.state.error.message}</h2>: this.state.posts.map((post) => (
            <Post key={post.id} title={post.title} body={post.body} deletePost={()=>this.deletePostHandler(post.id)}/>
          ))}
       
        </div>

        <button onClick={this.getPostsHandler}>Get Data</button>
      </>
    );
  }
}
 
export default Comp4Fetch;