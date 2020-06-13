import React from 'react';
import { NavLink } from 'react-router-dom';
import './ChatItem.scss';

const ChatItem = (props) => {
  return (
    <NavLink to={"/chats/" + props.id} className='ChatItem'>
      <img src={props.img} alt='Фото группы' />
      <div className='chat-description'>
        <span className='name-chat'>{props.name}</span>
        <span className='text-chat'>{props.textName} : {props.text}</span>
      </div>
    </NavLink>
  );
}

export default ChatItem;