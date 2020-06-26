import React from 'react';
import { connect } from 'react-redux';
import Chats from './Chats';
import ChatItem from './ChatItem/ChatItem';

const chatList = (state, ownProps) => {

    let chatItems = state.chatsPage.chats.map(chat => {
        let lastElement = chat.messages.length - 1;
        let lastUser = state.users.find(item => item.id === chat.messages[lastElement].idUser);
        let lastUserName;
        if (lastUser.id === ownProps.myId) {
            lastUserName = 'Вы';
        } else {
            lastUserName = lastUser.name;
        }
        return <ChatItem id={chat.id} name={chat.name} img={chat.img} textName={lastUserName} text={chat.messages[lastElement].message} />;
    });

    return chatItems;
};

const mapStateToProps = (state, ownProps) => {
    return {
        chatItems: chatList(state, ownProps)
    };
};

export default connect(mapStateToProps)(Chats);