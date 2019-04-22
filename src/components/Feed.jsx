import React from 'react';
import SearchFeed from './SearchFeed';
import Post from './Post';

function Feed() {
  let container = {
    border: '1px solid black',
    width: '300px'
  }
  return (
    <div style={container}>
      <SearchFeed/>
      <Post/>
    </div>
  );
}

export default Feed;