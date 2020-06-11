import React from 'react';
import './chatItem.scss';

const ChatItem = () => {
  return (
    <div className='chat-item'>
      <img src="https://pbs.twimg.com/media/D7HkTV9WkAABh_c.jpg" alt="Фото группы" />
      <div className='chat-description'>
        <span className='name-chat'>Fosgen</span>
        <span className='text-chat'>Вы куда все ушли, я тоже хочу выйти от сюда.</span>
      </div>
    </div>
  );
}

export default ChatItem;