import React from 'react';
import './App.scss';
import Navbar from './app-components/Navbar/Navbar';
import Chats from './app-components/Chats/Chats';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Navbar />
      <Chats />
    </div>);
}

export default App;