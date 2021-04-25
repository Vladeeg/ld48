import React from 'react';

import './Photo.css';

const Photo = (props) => {
  const { src } = props;
  return <div className='photo-container'>
    <img className='photo' src={src} />
  </div>
}

export default Photo;
