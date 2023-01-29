import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter,HashRouter, Routes, Route} from "react-router-dom"
import Router from './Components/Router'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router></Router>
);


