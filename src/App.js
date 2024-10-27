import React from 'react';
import Sidebar from './components/Sidebar';
import ChannelList from './components/ChannelList';
import Chat from './components/Chat';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <ChannelList />
      <Chat />
    </div>
  );
}
export default App;