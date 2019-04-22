import React from 'react';

function Post() {
  let image = {
    width: '50px',
    height: '50px',
    float: 'left',
    padding: '0 10px 0 10px'
  }
  let text = {
    paddingLeft: '10px'
  }
  return (
    <div>
      <img style={image} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"/>
      <p style={text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis impedit at sunt. Omnis deserunt quod eveniet, quidem voluptatem itaque ad quos quam id. Quibusdam ea recusandae, velit quo et labore!</p>
    </div>
  );
}

export default Post;