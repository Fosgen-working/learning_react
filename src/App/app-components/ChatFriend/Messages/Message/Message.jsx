import React from 'react';
import './Message.scss';

const Message = (props) => {
    return (
        <div className={'Message ' + props.classFlex}>
            <p className='sender-nickname'>{props.name}</p>
            <p className='text-message'>{props.text}</p>
            <span className='departure-date'>17:53</span>
        </div>
    );
}

export default Message;