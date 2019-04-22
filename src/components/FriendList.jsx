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
      <Friend
      img="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      text="Donec eu orci et"/>
      <Friend
      img="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      text="Donec eu orci et"/>
      <Friend
      img="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      text="Donec eu orci et"/>
    </div>
  );
}

export default FriendList;