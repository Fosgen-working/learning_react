import React from 'react';
import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <div className='a-up'>
                <a className='user-img' href="#s"><img src="https://pbs.twimg.com/media/D7HkTV9WkAABh_c.jpg" alt="You" /></a>
                <a href="#s"><i className="fas fa-comment-alt"></i></a>
                <a href="#s"><i className="fas fa-user-friends"></i></a>
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