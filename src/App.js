import React from 'react';
import './App.css';
import Navbar from './app-components/Navbar/Navbar';
import Profile from './app-components/Chats/Chats';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Navbar />
      <Profile />
    </div>);
}

export default App;