import React from 'react';
import './Message.scss';

const Message = (props) => {
    return (
        <div className='Message'>
            <p className='sender-nickname'>Fosgen</p>
            <p className='text-message'>Thank you so much. After I review these files, I will give you my opinion. If there's a problem, you can send it back. Good luck with!</p>
            <span className='departure-date'>17:53</span>
        </div>
    );
}

export default Message;