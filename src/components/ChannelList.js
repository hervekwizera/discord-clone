import React from 'react';
import './ChannelList.css';

function ChannelList() {
  return (
    <div className="channelList">
      <h3>Server Name</h3>
      <div className="channelList__channel">
        <span># general</span>
      </div>
      <div className="channelList__channel">
        <span># random</span>
      </div>
      {/* Add more channels as needed */}
    </div>
  );
}

export default ChannelList;