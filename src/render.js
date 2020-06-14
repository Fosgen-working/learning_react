import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App.jsx';


export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state} />, document.getElementById('root'));
};