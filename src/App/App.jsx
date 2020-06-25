import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Navbar from './app-components/Navbar/Navbar';
import Chats from './app-components/Chats/Chats';
import Chat from './app-components/Chat/Chat';
import Friends from './app-components/Friends/Friends';
import ChatFriendContainer from './app-components/ChatFriend/ChatFriendContainer';

const App = (props) => {

  let myId = 1;

  let chatLinksChats = props.chats.map(chat => <Route path={'/chats/' + chat.id} render={() => <Chat chatData={chat} usresData={props.users} myId={myId} />} />);
  let chatLinksFriends = props.friends.map(chat => <Route path={'/friends/' + chat.id} render={() => <ChatFriendContainer chatData={chat} myId={myId} />} />);
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='app-grid-block'>
          <div className='nav-grid-block'>
            <Navbar />
          </div>
          <div className='sidebar-grid-block'>
            {/* <Route path='/friends' render={() => <Friends friendsData={props.store.getState().friendsPage.friends} usresData={props.store.getState().users} myId={myId} />} />
            <Route path='/chats' render={() => <Chats chatsData={props.store.getState().chats} usresData={props.store.getState().users} />} /> */}
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