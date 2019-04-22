import React from "react";
import Navbar from './Navbar';
import Badge from './Badge';
import Bio from './Bio';
import Feed from './Feed'
import FriendList from './FriendList';

function App() {
  let columns = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    marginLeft: '25px',
    marginRight: '25px'
  }
  return (
    <div>
      <Navbar/>
      <div style={columns}>
        <div>
          <Badge/>
          <Bio/>
        </div>
        <div>
          <Feed/>
        </div> 
        <div>
          <FriendList/>
        </div>
      </div>
    </div>
  );
}

export default App;