import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Navbar from './app-components/Navbar/Navbar';
import Chats from './app-components/Chats/Chats';
import Chat from './app-components/Chat/Chat';
import Friends from './app-components/Friends/Friends';
import ChatFriend from './app-components/ChatFriend/ChatFriend';

const App = (props) => {

  let myId = 1;

  let chatLinksChats = props.state.chats.map(chat => <Route path={'/chats/' + chat.id} render={() => <Chat chatData={chat} usresData={props.state.users} myId={myId} />} />);
  let chatLinksFriends = props.state.friends.map(chat => <Route path={'/friends/' + chat.id} render={() => <ChatFriend chatData={chat} usresData={props.state.users} myId={myId} />} />);

  return (
    <BrowserRouter>
      <div className='App'>
        <div className='app-grid-block'>
          <div className='nav-grid-block'>
            <Navbar />
          </div>
          <div className='sidebar-grid-block'>
            <Route path='/friends' render={() => <Friends friendsData={props.state.friends} usresData={props.state.users} myId={myId} />} />
            <Route path='/chats' render={() => <Chats chatsData={props.state.chats} usresData={props.state.users} />} />
          </div>
          <div className='chat-room-grid-block'>
            {chatLinksChats}
            {chatLinksFriends}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;