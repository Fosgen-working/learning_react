import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, { addFriendMessage, updateFriendMessageText, subscribr } from './redux/state';
import App from './App/App.jsx';

let rerenderEntireTree = () => {
    ReactDOM.render(<App state={state} addFriendMessage={addFriendMessage} updateFriendMessageText={updateFriendMessageText} />, document.getElementById('root'));
};

rerenderEntireTree();

subscribr(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

