import React from 'react';
import './index.css';
export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return <div className='one-a'>
      <div className='two-a'>
        <div className='three-a'>
          <input className="search" placeholder="工业品价格低至9.9"></input>
          <div className="search-camera"></div>
          <i class="iconfont"></i>
        </div>
        <div className='four-c'>
          <div className='four-a' onClick={() => { window.open(this.props.twos.href) }}><i class="iconfont"></i>{this.props.twos.text}<div class="ci-count" >0</div></div>
          <div className='four-b'></div>
        </div>
        <img src={this.props.yes} />
      </div>
      <div className='five-a' >
        {this.props.ones.map(item => { return <div onClick={() => { window.open(item.href) }}>{item.text}</div> })}
      </div>
      <div className='five-b'>
        {this.props.threes.map(item => { return <div onClick={() => { window.open(item.href) }}>{item.text}</div> })}
      </div>
    </div>
  }
}