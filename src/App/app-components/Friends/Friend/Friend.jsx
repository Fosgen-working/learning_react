import React from 'react';
import { NavLink } from 'react-router-dom';
import './Friend.scss';

const Friend = (props) => {
  return (
    <NavLink to={"/friends/" + props.id} className='Friend'>
      <img src={props.img} alt='Фото друга' />
      <div className='friend-description'>
        <span className='name-friend'>{props.name}</span>
        <span className='text-friend'>{props.textName} : {props.text}</span>
      </div>
    </NavLink>
  );
}

export default Friend;