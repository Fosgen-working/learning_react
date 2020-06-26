import React from 'react';
import './Friends.scss';

const Friends = (props) => {

  return (
    <div className='Friends'>
      <div className='sidebar-name'>
        <span>Друзья</span>
        <button type='button' name='new_chat'><i className="fas fa-user-plus"></i></button>
      </div>
      <div className='search-friends'>
        <input type='text' placeholder='Поиск друзей' />
      </div>
      <div className='friends-list'>
        {props.friends}
      </div>
    </div>
  );
}

export default Friends;