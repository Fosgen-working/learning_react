import React from 'react';
import { connect } from 'react-redux';
import Friends from './Friends';
import Friend from './Friend/Friend';

const friendsList = (state, ownProps) => {
    let friends = state.friendsPage.friends.map(friend => {
        let lastElement = friend.messages.length - 1;
        let friendId;
        for (let id of friend.idUsers) {
            if (id !== ownProps.myId) {
                friendId = id;
                break;
            }
        }
        let friendInfo = state.users.find(item => item.id === friendId);
        let lastUser = state.users.find(item => item.id === friend.messages[lastElement].idUser);
        let lastUserName;
        if (lastUser.id === ownProps.myId) {
            lastUserName = 'Вы';
        } else {
            lastUserName = lastUser.name;
        }
        return <Friend id={friend.id} name={friendInfo.name} img={friendInfo.img} textName={lastUserName} text={friend.messages[lastElement].message} />;
    });

    return friends;
};

const mapStateToProps = (state, ownProps) => {
    return {
        friends: friendsList(state, ownProps)
    };
};

export default connect(mapStateToProps)(Friends);