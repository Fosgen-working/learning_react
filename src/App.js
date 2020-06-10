import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Chats/Chats';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Navbar />
      <Profile />
    </div>);
}

export default App;