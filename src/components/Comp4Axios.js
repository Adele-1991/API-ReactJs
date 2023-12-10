import React, { Component } from "react";
import style from "../styles/style.module.css";
import axios from "axios";

class Comp4Axios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:0,
      title: "",
      body: "",
    };
  }
  inputChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  updatePostHandler = () => {
    axios
      .patch(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`, {
        title: this.state.title,
        body: this.state.body

      })
      .then((response) => console.log(response));
  };
  render() {
    const { title,id,body} = this.state;
    return (
      <div>
        <div className={style["form-control"]}>
         Post Id: <input
            type="number"
            name="id"
            value={id}
            onChange={this.inputChangeHandler}
          />
        </div>
        <div className={style["form-control"]}>
         Post title :<input
            type="text"
            name="title"
            value={title}
            onChange={this.inputChangeHandler}
          />
          <div className={style["form-control"]}>
          post body:<textarea
            type="text"
            name="body"
            value={body}
            onChange={this.inputChangeHandler}
          />
        </div>
        </div>{" "}
        <div className={style["form-control"]}>
          <button onClick={this.updatePostHandler}>Update Post</button>
        </div>
      </div>
    );
  }
}
export default Comp4Axios;
