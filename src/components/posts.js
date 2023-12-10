import React, { Component } from 'react';
import style from "../styles/style.module.css"

class Post extends Component {
   
    
    render() { 
        const {title,body,deletePost}=this.props;
        return (<>
        <div className={style["post-box1"]}>
            <h2>{title}</h2>
            <p>{body}</p>
<button onClick={deletePost}>delete</button>
        </div>
        </>);
    }
}
 
export default Post;