import React from 'react';
import './Chats.scss';

const Chats = (props) => {

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
        {props.chatItems}
      </div>
    </div>
  );
}

export default Chats;