import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App3';
import axios from "axios";

axios.defaults.baseURL="https://jsonplaceholder.typicode.com/"
axios.defaults.headers["Content-Type"]="application/json";

// axios.interceptors.request.use(req=>{console.log(req.method);
// return req;});
axios.interceptors.response.use((res)=>{
return res.data;});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
  
);

