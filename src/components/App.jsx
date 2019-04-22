import React from "react";
import Navbar from './Navbar';
import Badge from './Badge';
import Bio from './Bio';
import Feed from './Feed'

function App() {
  let columns = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: "10px"
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

        </div>
      </div>
    </div>
  );
}

export default App;