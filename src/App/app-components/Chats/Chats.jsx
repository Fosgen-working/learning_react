import React from 'react';
import './Chats.scss';
import ChatItem from './chat-item/chatItem';

const Chats = () => {
  return (
    <div className='Chats'>
      <div className="sidebar-name">
        <span>Группы</span>
        <button type="button" name="new_chat"><i class="fas fa-comment-medical"></i></button>
      </div>
      <form>
        <input type="text" className="search-chat" placeholder="Поиск группы" />
      </form>
      <div className='chat-list'>
        <ChatItem />
        <ChatItem />
      </div>
    </div>
  );
}

export default Chats;