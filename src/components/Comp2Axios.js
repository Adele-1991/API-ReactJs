import React, { Component } from "react";
import style from "../styles/style.module.css";
import axios from "axios";

class Comp2Axios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
  }
  inputChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  inserPostHandler = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: this.state.title,
        body: this.state.body,
      })
      .then((response) => console.log(response));
  };
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <div className={style["form-control"]}>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.inputChangeHandler}
          />
        </div>
        <div className={style["form-control"]}>
          <textarea
            type="text"
            name="body"
            value={body}
            onChange={this.inputChangeHandler}
          />
        </div>
        <div className={style["form-control"]}>
          <button onClick={this.inserPostHandler}>Insert Post</button>
        </div>
        <h3>title:{title} </h3>
        <h3>body:{body}</h3>
      </div>
    );
  }
}
export default Comp2Axios;
