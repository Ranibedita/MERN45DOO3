import React from 'react';
import './ImageCard.css';

const ImageCard = (props) => {
  return (
    <div className="image-card">
        <img src={props.imgSrc} alt="card" className="card-img" width="100" height="100"/>
        <h3>{props.title}</h3>
    </div>
  );
}

export default ImageCard;
