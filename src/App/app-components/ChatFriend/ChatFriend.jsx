import React from 'react';
import './ChatFriend.scss';
import Messages from './Messages/Messages';

const ChatFriend = (props) => {

    let newFriendMessage = React.createRef();

    return (
        <div className='ChatFriend'>
            <div className='header-chat'>
                <div className='interlocutor'>
                    <img src={props.friendInfo.img} alt="Фото собеседника" />
                    <div className='description-interlocutor'>
                        <span className='name-interlocutor'>{props.friendInfo.name}</span>
                        <span className='status-interlocutor'>Offline</span>
                    </div>
                </div>
                <button type="button" name="options_chat"><i className="fas fa-ellipsis-h"></i></button>
            </div>
            <div className='strip-block'></div>
            <div className='messages-block'>
                <Messages friendInfo={props.friendInfo} messages={props.chatData.messages} myId={props.myId} />
            </div>
            <div className='strip-block'></div>
            <div className='delivery-form'>
                <input onChange={() => { props.updateMessage(newFriendMessage.current.value) }} ref={newFriendMessage} value={props.inputValue} placeholder='Текст сообщения' />
                <button onClick={() => { if (props.inputValue !== '') { props.addMessage(props.chatData.id) } }}><i className="fa fa-send"></i></button>
            </div>
        </div>
    );
}

export default ChatFriend;