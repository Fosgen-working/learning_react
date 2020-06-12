import React from 'react';
import './Friends.scss';
import Friend from './Friend/Friend';

const Friends = () => {
  return (
    <div className='Friends'>
      <div className='sidebar-name'>
        <span>Друзья</span>
        <button type='button' name='new_chat'><i className="fas fa-user-plus"></i></button>
      </div>
      <form className='search-friends'>
        <input type='text' placeholder='Поиск друзей' />
      </form>
      <div className='friends-list'>
        <Friend />
        <Friend />
      </div>
    </div>
  );
}

export default Friends;