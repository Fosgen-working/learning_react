import React from 'react';
import './App.scss';
import Navbar from './app-components/Navbar/Navbar';
import Chats from './app-components/Chats/Chats';

const App = () => {
  return (
    <div className='app-wrapper'>
      <div className='app-grid-block'>
        <div className='nav-grid-block'>
          <Navbar />
        </div>
        <div className='sidebar-grid-block'>
          <Chats />
        </div>
        <div className='chat-room-grid-block'>

        </div>
      </div>
    </div>
  );
}

export default App;