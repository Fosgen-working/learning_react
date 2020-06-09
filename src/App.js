import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Navbar />
      <Profile />
    </div>);
}

export default App;