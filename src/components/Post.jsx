import React from 'react';

function Post() {
  let image = {
    width: '50px',
    height: '50px',
    float: 'left',
    padding: '0 10px 0 10px',
    marginTop: '15px'
  }
  let text = {
    paddingLeft: '10px',
    marginTop: '-10px'
  }
  let border={
    border: '1px solid lightgray',
    display: 'grid',
    gridTemplateColumns: '1fr 4fr'
  }
  let name={
    marginLeft: '10px',
    
  }
  return (
    <div style={border}>
      <img style={image} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"/>
      <div>
        <p style={name}><strong>Lorem Ipsum</strong></p>
        <p style={text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nullam</p>
      </div>
    </div>
  );
}

export default Post;