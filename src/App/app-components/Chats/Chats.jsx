import React from 'react';
import './Chats.scss';
import ChatItem from './ChatItem/ChatItem';

const Chats = (props) => {

  let chatItems = props.chatsData.map(chat => <ChatItem id={chat.id} name={chat.name} img={chat.img} textName={chat.textName} text={chat.text} />);

  return (
    <div className='Chats'>
      <div className='sidebar-name'>
        <span>Группы</span>
        <button type='button' name='new_chat'><i className='fas fa-comment-medical'></i></button>
      </div>
      <div className='search-chat'>
        <input type='text' placeholder='Поиск группы' />
      </div>
      <div className='chat-list'>
        {chatItems}
      </div>
    </div>
  );
}

export default Chats;