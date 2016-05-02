import React from 'react';
import moment from 'moment';

const Item = ({model}) => {
  return (
    <div className="article-item">
      <div className="title">{model.title}</div>
      <div className="date">{moment(model.createAt).format('MMM DD, YYYY')}</div>
      <div className="description">{model.description}</div>
    </div>
  )
}

export default Item;