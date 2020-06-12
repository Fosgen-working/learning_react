import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Navbar from './app-components/Navbar/Navbar';
import Chats from './app-components/Chats/Chats';
import Chat from './app-components/Chat/Chat';
import Friends from './app-components/Friends/Friends';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='app-grid-block'>
          <div className='nav-grid-block'>
            <Navbar />
          </div>
          <div className='sidebar-grid-block'>
            <Route path='/friends' component={Friends} />
            <Route path='/chats' component={Chats} />
          </div>
          <div className='chat-room-grid-block'>
            <Chat />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;