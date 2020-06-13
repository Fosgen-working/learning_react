import React from 'react';
import './Friends.scss';
import Friend from './Friend/Friend';

const Friends = (props) => {

  let friends = props.friendsData.map(friend => <Friend id={friend.id} name={friend.name} img={friend.img} textName={friend.textName} text={friend.text} />);

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
        {friends}
      </div>
    </div>
  );
}

export default Friends;