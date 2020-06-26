import React from 'react';
import { connect } from 'react-redux';
import Chat from './Chat';
import { updateChatMessageCreator, addChatMessageCreator } from '../../../redux/chats-reducer';


const necessaryUsersInfo = (state, ownProps) => {
    let users = state.users.filter(user => {
        for (let id of ownProps.chatData.idUsers) {
            if (id === user.id) {
                return true;
            }
        }
    });
    return users;
};


const mapStateToProps = (state, ownProps) => {
    return {
        chatData: ownProps.chatData,
        myId: ownProps.myId,
        usersInfo: necessaryUsersInfo(state, ownProps),
        inputValue: ownProps.chatData.newChatMessageText
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (id) => {
            dispatch(addChatMessageCreator(id));
        },
        updateMessage: (text, id) => {
            dispatch(updateChatMessageCreator(text, id));
        }
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Chat);