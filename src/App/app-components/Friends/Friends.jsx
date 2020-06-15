import React from 'react';
import './Friends.scss';
import Friend from './Friend/Friend';

const Friends = (props) => {

  let friends = props.friendsData.map(friend => {
    let lastElement = friend.messages.length - 1;
    let friendId;
    for (let id of friend.idUsers) {
      if (id !== props.myId) {
        friendId = id;
        break;
      }
    }
    let friendInfo = props.usresData.find(item => item.id === friendId);
    let lastUser = props.usresData.find(item => item.id === friend.messages[lastElement].idUser);
    return <Friend id={friend.id} name={friendInfo.name} img={friendInfo.img} textName={lastUser.name} text={friend.messages[lastElement].message} />;
  });
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