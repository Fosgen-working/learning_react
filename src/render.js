import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App.jsx';
import { addFriendMessage, updateFriendMessageText } from './redux/state';


export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state} addFriendMessage={addFriendMessage} updateFriendMessageText={updateFriendMessageText} />, document.getElementById('root'));
};