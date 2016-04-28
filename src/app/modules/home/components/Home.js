import React, {Component} from 'react';
import classnames from 'classnames';

import {List} from 'modules/list';
import {Me} from 'modules/me';

import './style.css';

export default class Home extends Component {

  state = {
    skew: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        skew: false,
      })
    }, 100)
  }

  render() {
    return (
      <div className="home">
        <div className="left-container">
          <div className={classnames("mask", {skew: this.state.skew})}>
            <Me />
          </div>
        </div>
        <div className="right-container">
          <List />
        </div>
      </div>
    )
  }
}