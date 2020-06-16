import React from 'react';
import './Messages.scss';
import Message from './Message/Message';

const Messages = (props) => {

    let messageItem = props.messages.map(item => {
        let classFlex = 'left-flex';
        let userName;
        if (item.idUser === props.myId) {
            userName = 'Вы';
            classFlex = 'right-flex';
        } else {
            userName = props.friendInfo.name;
        }
        return <Message text={item.message} name={userName} classFlex={classFlex} />;
    });

    return (
        <div className='Messages'>
            {messageItem}
        </div>
    );
}

export default Messages;