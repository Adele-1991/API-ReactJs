import React, { Component } from 'react';
import style from "../styles/style.module.css";
class CompMovie extends Component {

    render() { 
        const {id,title,poster,country}=this.props;
    
        return (
            <div key={id} className={style["movie-box"]}>
                <img src={poster} alt={title} className={style["movie-img"]}/>
                <h3>{title}</h3>
                <h5>{country}</h5>
            </div>
        );
    }
}
 
export default CompMovie; 