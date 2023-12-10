import React, { Component } from "react";
import Post from "./posts";
import axios from "axios";

class Comp1Axios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isError: false,
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => this.setState({ posts: response.data }))
      .catch(() => this.setstate({isError: true }));
  };

  render() {
    const {posts , isError} = this.state;
    return (
      <>
        <div>
        {isError ? (<h3>Error...</h3>) : (posts.map((post) => (
            <Post key={post.id} title={post.title} body={post.body} />
          )))}
        </div>
      </>
    );
  }
}

export default Comp1Axios;
