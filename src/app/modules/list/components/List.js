import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import Item from './Item';

import './style.css';

const container = connect(
  (state) => ({
    articles: _.get(state, 'articles.data'),
  }),
);

class List extends Component {

  render() {
    const {articles} = this.props;
    
    return (
      <div className="article-list">
      {
        _.map(articles, (d, i) =>
          <Item key={i} model={d} />
        )
      }
      </div>
    )
  }
}

export default container(List);