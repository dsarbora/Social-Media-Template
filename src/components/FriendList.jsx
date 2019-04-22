import React from 'react';
import Friend from './Friend';

function FriendList(){
  let container={
    border: '2px solid lightgray',
    paddingLeft: '15px',
    color: '#777777'
  }
  return(
    <div style={container}>
      <h4>Lorem ipsum</h4>
      <Friend/>
      <Friend/>
      <Friend/>
    </div>
  );
}

export default FriendList;