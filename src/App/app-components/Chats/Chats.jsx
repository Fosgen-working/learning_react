import React from 'react';
import './Chats.scss';
import ChatItem from './ChatItem/ChatItem';

const Chats = (props) => {

  let chatItems = props.chatsData.map(chat => {
    let lastElement = chat.messages.length - 1;
    let lastUser = props.usresData.find(item => item.id === chat.messages[lastElement].idUser);
    return <ChatItem id={chat.id} name={chat.name} img={chat.img} textName={lastUser.name} text={chat.messages[lastElement].message} />
  });

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