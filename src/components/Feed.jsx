import React from 'react';
import SearchFeed from './SearchFeed';
import Post from './Post';

function Feed() {
  let container = {
    border: '2px solid lightgray',
    width: '300px'
  }
  return (
    <div style={container}>
      <SearchFeed/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  );
}

export default Feed;