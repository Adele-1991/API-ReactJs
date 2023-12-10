// import React, { Component } from "react";
// import CompMovie from "./CompMovie";
// import style from "../styles/style.module.css"
// class Comp1 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       movies: [],
//     };
//   }
//   requestData = () => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("Get", "https://moviesapi.ir/api/v1/movies", true);
//     xhr.onload = () => {
//       if (xhr.status === 200) {
//         const movies = JSON.parse(xhr.response);
//         this.setState({ movies: movies.data });
//       }
//     };
//     xhr.send(null);
//   };
//   getDataHandler = () => {
//     this.requestData();
//   };
//   render() {
//     return (
//       <>
//         <div className={style["movies-box"]}>
//           {this.state.movies.map((film) => (
//             <CompMovie
//               id={film.id}
//               title={film.title}
//               poster={film.poster}
//               country={film.country}
//             />
//           ))}
//         </div>
//         <button onClick={this.getDataHandler}>Get Data</button>
//       </>
//     );
//   }
// }

// export default Comp1;
