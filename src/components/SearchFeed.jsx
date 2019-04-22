import React from 'react';

function SearchFeed() {
  let buttonStyle = {
    width: '34px',
    height: '34px',
    margin: '20px 10px 0 40px',
    float: 'left',
    backgroundColor: 'maroon'
  }
  let inputStyle = {
    height: '30px',
    width: '200px',
    marginTop: '20px',
    border: '2px solid #00ddff'
  }
  let divStyle = {
    backgroundColor: 'lightblue',
    paddingBottom: '20px'

  }
  return (
    <div style={divStyle}>
      <button style={buttonStyle}></button>
      <input style={inputStyle} type="text" placeholder="What's happening?"/>
    </div>
  );
}

export default SearchFeed;

