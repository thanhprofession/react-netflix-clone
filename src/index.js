import React from 'react';
import ReactDOM from 'react-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import "./../node_modules/slick-carousel/slick/slick.css"; 
import "./../node_modules/slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
