import React, { Component } from "react";
import style from "../styles/style.module.css";
import axios from "axios";

class Comp5Axios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      users: [],
      todos: [],
    };
  }

  componentDidMount() {
    axios
      .all([
        axios.get("posts"),
        axios.get("users"),
        axios.get("todos"),
      ])
      .then(axios.spread((p,u,t)=>{
        this.setState({
          posts:p,
          users:u,
          todos:t
        })
      }));
  }
  render() {
    return (
      <div className={style.box3}>
        <div className={style.box2}>
          {this.state.posts.map((post) => (
            <p key={post.id}>{post.title}</p>
          ))}
        </div>

        <div className={style.box2}>
          {this.state.users.map((user) => (
            <p key={user.id}>{user.name}</p>
          ))}
        </div>
        <div className={style.box2}>
          {this.state.todos.map((todo) => (
            <p key={todo.id}>{todo.title}</p>
          ))}
        </div>
      </div>
    );
  }
}
export default Comp5Axios;
