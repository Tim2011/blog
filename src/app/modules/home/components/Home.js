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
        skew: true,
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
          <div className="motto">
            世界上沒有什麼事情是一頓燒烤解決不了的，如果有，那就兩頓。
          </div>
          <List />
        </div>
      </div>
    )
  }
}