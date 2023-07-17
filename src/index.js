import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'
import ReactDOM from 'react-dom/client';
import './scss/style.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>

);



