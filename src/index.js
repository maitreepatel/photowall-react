import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Main from "./Components/Main";
import "./Styles/Stylesheet.css";

ReactDOM.render( <BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));



