import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Navbar from './app-components/Navbar/Navbar';
import ChatFriendContainer from './app-components/ChatFriend/ChatFriendContainer';
import ChatContainer from './app-components/Chat/ChatContainer';
import ChatsContainer from './app-components/Chats/ChatsContainer';
import FriendsContainer from './app-components/Friends/FriendsContainer';

const App = (props) => {

  let myId = 1;

  let chatLinksChats = props.chats.map(chat => <Route path={'/chats/' + chat.id} render={() => <ChatContainer chatData={chat} myId={myId} />} />);
  let chatLinksFriends = props.friends.map(chat => <Route path={'/friends/' + chat.id} render={() => <ChatFriendContainer chatData={chat} myId={myId} />} />);
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='app-grid-block'>
          <div className='nav-grid-block'>
            <Navbar />
          </div>
          <div className='sidebar-grid-block'>
            <Route path='/friends' render={() => <FriendsContainer myId={myId} />} />
            <Route path='/chats' render={() => <ChatsContainer myId={myId} />} />
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