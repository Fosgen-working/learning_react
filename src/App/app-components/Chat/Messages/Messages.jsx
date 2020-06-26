import React from 'react';
import './Messages.scss';
import Message from './Message/Message';

const Messages = (props) => {

    let messageItem = props.messages.map(item => {
        let classFlex = 'left-flex';
        let userInfo = props.usresData.find(user => user.id === item.idUser);
        if (userInfo.id === props.myId) {
            userInfo.name = 'Вы';
            classFlex = 'right-flex';
        }
        return <Message text={item.message} name={userInfo.name} classFlex={classFlex} />;
    });

    return (
        <div className='Messages'>
            {messageItem}
        </div>
    );
}

export default Messages;