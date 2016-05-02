import React, {Component} from 'react';
import classnames from 'classnames'
import './style.css';

export default class Me extends Component {
  
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
      <div className={classnames("me", {skew: this.state.skew})}>
        <div className="avatar">
          <img src={require('./images/avatar.jpg')} alt="干！头像呢？"/>
        </div>
        <div className="me-title">
          人称天哥、十四、十四爷
        </div>
        <div className="me-title">
          一个搞前端的文艺逗逼
        </div>
        <div className="me-title">
          爆屌超人 篮球队队长
        </div>
      </div>
    )
  }
}
