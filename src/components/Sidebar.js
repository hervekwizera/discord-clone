

import React from 'react';
import './Sidebar.css';
import DiscordLogo from '../assets/discord-logo.png'; // Adjust the path if necessary

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__server">
        <img
          src={DiscordLogo}
          alt="Discord"
        />
      </div>
      {/* Add more servers or items as needed */}
    </div>
  );
}

export default Sidebar;