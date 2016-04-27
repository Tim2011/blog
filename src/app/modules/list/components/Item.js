import React from 'react';

const Item = ({model}) => {
  return (
    <div className="article-item">
      <div className="title">{model.title}</div>
      <div className="date">{model.createAt}</div>
      <div className="description">{model.description}</div>
    </div>
  )
}

export default Item;