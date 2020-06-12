import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <div className='a-up'>
                <a className='user-img' href="#s"><img src="https://pbs.twimg.com/media/D7HkTV9WkAABh_c.jpg" alt="Вы" /></a>
                <NavLink to="/chats"><i className="fas fa-comment-alt"></i></NavLink>
                <NavLink to="/friends"><i className="fas fa-user-friends"></i></NavLink>
                <a href="#s"><i className="fas fa-star"></i></a>
            </div>
            <div className='a-down'>
                <a href="#s"><i className="fas fa-cog"></i></a>
                <a href="#s"><i className="fas fa-power-off"></i></a>
            </div>
        </nav >
    );
}

export default Navbar;