import React from 'react';
import { connect } from 'react-redux';
import App from './App';

let mapStateToProps = (state) => {
    return {
        friendsPage: state.friendsPage,
        chats: state.chats
    };
};

export default connect(mapStateToProps)(App);