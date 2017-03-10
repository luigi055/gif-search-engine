import React, { Component } from 'react';
import GifItem from './GifItem';

const GifList = props => {

  const GifItems = props.gifs.map(image => {
    return (
      <GifItem
        key={image.id}
        gif={image}
        onGifSelect={props.onGifSelect}
      />
    );
  });

  return (
    <div className="gif-list">{GifItems}</div>
  );
};

export default GifList;
