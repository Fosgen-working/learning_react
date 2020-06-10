import React from 'react';
import './Chats.scss';

const Chats = () => {
  return (
    <div className='Chats'>
      <div className="sidebar-name">
        <span>Чаты</span>
        <button type="button" name="new_chat"></button>
      </div>
    </div>
  );
}

export default Chats;