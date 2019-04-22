import React from 'react';

function Bio(){
  let container={
    marginTop: '15px',
    border: '2px solid lightgray',
    width: '296px'
  }
  let text={
    color: 'gray',
    padding: '0 20px 0 20px'
  }
  return(
    <div style={container}>
      <p style={text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel suscipit vitae recusandae mollitia omnis hic optio pariatur, ex laboriosam delectus amet molestias non iusto odit aliquam consectetur saepe iure! Sequi.</p>
      <p style={text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel suscipit vitae recusandae mollitia omnis hic optio pariatur, ex laboriosam delectus amet molestias non iusto odit aliquam consectetur saepe iure! Sequi.</p>
    </div>
  );
}

export default Bio;