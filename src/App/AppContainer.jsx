import React from 'react';
import { connect } from 'react-redux';
import App from './App';

let mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends,
        chats: state.chatsPage.chats
    };
};

export default connect(mapStateToProps)(App);