import React from 'react';
import './Friend.scss';

const Friend = () => {
  return (
    <div className='Friend'>
      <img src='https://pbs.twimg.com/media/D7HkTV9WkAABh_c.jpg' alt='Фото друга' />
      <div className='friend-description'>
        <span className='name-friend'>Fosgen</span>
        <span className='text-friend'>Вы куда все ушли, я тоже хочу выйти от сюда.</span>
      </div>
    </div>
  );
}

export default Friend;