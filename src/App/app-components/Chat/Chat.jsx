import React from 'react';
import './Chat.scss';
import Messages from './Messages/Messages';

const Chat = () => {
    return (
        <div className='Chat'>
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
            <form className='delivery-form'>
                <input type='text' placeholder='Текст сообщения' />
                <button type="submit"><i className="fa fa-send"></i></button>
            </form>
        </div>
    );
}

export default Chat;