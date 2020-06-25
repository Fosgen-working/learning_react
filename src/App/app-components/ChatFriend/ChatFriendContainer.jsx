import React from 'react';
import { connect } from 'react-redux';
import ChatFriend from './ChatFriend';
import { addFriendMessageCreator, updateFriendMessageCreator } from '../../../redux/friends-reducer';


const necessaryFriendInfo = (state, ownProps) => {
    let friendId;
    for (let id of ownProps.chatData.idUsers) {
        if (id !== ownProps.myId) {
            friendId = id;
            break;
        }
    }
    return state.users.find(item => item.id === friendId);
};

const mapStateToProps = (state, ownProps) => {
    return {
        chatData: ownProps.chatData,
        myId: ownProps.myId,
        friendInfo: necessaryFriendInfo(state, ownProps),
        inputValue: state.friendsPage.newFriendMessageText

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (id) => {
            dispatch(addFriendMessageCreator(id));
        },
        updateMessage: (text) => {
            dispatch(updateFriendMessageCreator(text));
        }
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(ChatFriend);