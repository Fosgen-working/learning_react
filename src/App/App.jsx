import React from 'react';
import './App.scss';
import Navbar from './app-components/Navbar/Navbar';
import Chats from './app-components/Chats/Chats';
import Chat from './app-components/Chat/Chat';

const App = () => {
  return (
    <div className='App'>
      <div className='app-grid-block'>
        <div className='nav-grid-block'>
          <Navbar />
        </div>
        <div className='sidebar-grid-block'>
          <Chats />
        </div>
        <div className='chat-room-grid-block'>
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default App;