import React from 'react';
import './Chat.scss';
import Messages from './Messages/Messages';

const Chat = (props) => {



    return (
        <div className='Chat'>
            <div className='header-chat'>
                <div className='interlocutor'>
                    <img src={props.chatData.img} alt="Фото группы" />
                    <div className='description-interlocutor'>
                        <span className='name-interlocutor'>{props.chatData.name}</span>
                        <span className='status-interlocutor'>Участников: {props.chatData.idUsers.length}</span>
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

export default Chat;