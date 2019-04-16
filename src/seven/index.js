import React from 'react';
import './index.css';
export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return <div className='seven-a'>
      <div className='seven-b'>
        <div className='seven-c'>京东秒杀</div>
        <div className='seven-d'>FLASH DEALS</div>
        <div className='seven-e'></div>
        <div className='seven-f'>本场距离结束还剩</div>
        <div className='seven-g'>
          <div className='seven-h'>00</div>
          <div className='seven-i'>22</div>
          <div className='seven-j'>33</div>
        </div>
      </div>
      <div className='seven-k'>{this.props.sevenList.map(item => { return <div className='seven-l'><img src={item.src} /><div className='seven-p'>{item.text}</div><div className='seven-m'><div className='seven-n'>{item.price1}</div><div className='seven-o'>{item.price2}</div></div></div> })}</div>
      <div className='seven-q'>{this.props.children}</div>
    </div>
  }
}