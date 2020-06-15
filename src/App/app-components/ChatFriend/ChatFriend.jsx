import React from 'react';
import './ChatFriend.scss';
import Messages from './Messages/Messages';

const ChatFriend = (props) => {



    return (
        <div className='ChatFriend'>
            <div className='header-chat'>
                <div className='interlocutor'>
                    <img src="https://pbs.twimg.com/media/D7HkTV9WkAABh_c.jpg" alt="Фото собеседника" />
                    <div className='description-interlocutor'>
                        <span className='name-interlocutor'>Fosgen</span>
                        <span className='status-interlocutor'>Offline</span>
                    </div>
                </div>
                <button type="button" name="options_chat"><i className="fas fa-ellipsis-h"></i></button>
            </div>
            <div className='strip-block'></div>
            <div className='messages-block'>
                <Messages />
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