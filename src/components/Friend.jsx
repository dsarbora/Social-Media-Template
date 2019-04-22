import React from 'react';

function Friend(){
  let image = {
    width: '60x',
    height: '60px',
    marginRight: '15px'
  }
  let buttonStyle={
    backgroundColor: '#4f7fcc',
    padding: '7px 25px 7px 25px',
    color: 'white',
    marginTop: '-15px',
    marginBottom: '20px'
  }
  let columns = {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
  }
  let raised={
    marginTop: '-25px'
  }

  return(
    <div style={columns}>
      <div>
        <img style={image} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"/>
      </div>
      <div style={raised}>
        <h4>Donec eu orci et</h4>
        <button style={buttonStyle}>Button</button>
      </div>
    </div>
  );
}

export default Friend;