import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Navbar from './app-components/Navbar/Navbar';
import Chats from './app-components/Chats/Chats';
import Chat from './app-components/Chat/Chat';
import Friends from './app-components/Friends/Friends';

const App = (props) => {


  return (
    <BrowserRouter>
      <div className='App'>
        <div className='app-grid-block'>
          <div className='nav-grid-block'>
            <Navbar />
          </div>
          <div className='sidebar-grid-block'>
            <Route path='/friends' render={() => <Friends friendsData={props.state.friends} usresData={props.state.users} />} />
            <Route path='/chats' render={() => <Chats chatsData={props.state.chats} usresData={props.state.users} />} />
          </div>
          <div className='chat-room-grid-block'>
            <Route path='/friends/1' render={() => <Chat />} />
            <Route path='/chats/1' render={() => <Chat />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;