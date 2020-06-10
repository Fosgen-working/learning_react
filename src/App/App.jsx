import React from 'react';
import './App.scss';
import Navbar from './app-components/Navbar/Navbar';
import Chats from './app-components/Chats/Chats';

const App = () => {
  return (
    <div className='app-wrapper'>
      <div className='app-grid-block'>
        <Navbar />
        <Chats />
      </div>
    </div>
  );
}

export default App;