import React from 'react';
import './ChatFriend.scss';
import Messages from './Messages/Messages';

const ChatFriend = (props) => {

    let friendId;
    for (let id of props.chatData.idUsers) {
        if (id !== props.myId) {
            friendId = id;
            break;
        }
    }
    let friendInfo = props.usresData.find(item => item.id === friendId);

    return (
        <div className='ChatFriend'>
            <div className='header-chat'>
                <div className='interlocutor'>
                    <img src={friendInfo.img} alt="Фото собеседника" />
                    <div className='description-interlocutor'>
                        <span className='name-interlocutor'>{friendInfo.name}</span>
                        <span className='status-interlocutor'>Offline</span>
                    </div>
                </div>
                <button type="button" name="options_chat"><i className="fas fa-ellipsis-h"></i></button>
            </div>
            <div className='strip-block'></div>
            <div className='messages-block'>
                <Messages friendInfo={friendInfo} messages={props.chatData.messages} myId={props.myId} />
            </div>
            <div className='strip-block'></div>
            <div className='delivery-form'>
                <input type='text' placeholder='Текст сообщения' />
                <button><i className="fa fa-send"></i></button>
            </div>
        </div>
    );
}

export default ChatFriend;