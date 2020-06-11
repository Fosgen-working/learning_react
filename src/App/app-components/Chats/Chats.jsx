import React from 'react';
import './Chats.scss';
import ChatItem from './ChatItem/ChatItem';

const Chats = () => {
  return (
    <div className='Chats'>
      <div className='sidebar-name'>
        <span>Группы</span>
        <button type='button' name='new_chat'><i className='fas fa-comment-medical'></i></button>
      </div>
      <form className='search-chat'>
        <input type='text' placeholder='Поиск группы' />
      </form>
      <div className='chat-list'>
        <ChatItem />
        <ChatItem />
      </div>
    </div>
  );
}

export default Chats;