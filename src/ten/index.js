import React from 'react';
import './index.css';
export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return <div className='six-a'>
      <div className='six-b'><div className='six-c' onClick={() => { window.open(this.props.tenImg.href) }} style={{ background: `url(${this.props.tenImg.img})` }}></div>{this.props.tens.map(item => { return <div className='column'>{item.map(items => { return <div onClick={() => { if (items.href) { window.open(items.href) } }}>{items.text}</div> })}</div> })}</div>
      <div className='six-f'>{this.props.children}</div>
      <div className='six-d'>
        {this.props.imgss.map(item => { return <img src={item.img} onClick={() => { window.open(item.href) }} className='six-e' /> })}
      </div>
      <div className='six-g'>
        <div className='six-h'>
          <img src={this.props.img1.img} onClick={() => { window.open(this.props.img1.href) }} className='six-i' />
          <img src={this.props.img2.img} onClick={() => { window.open(this.props.img2.href) }} className='six-j' />
          <div className='six-k'>{this.props.text1}</div>
          <div className='six-l' >{this.props.text2.map(item => { return <div onClick={() => { window.open(item.href) }} >{item.text}</div> })}</div>
          <div className='six-m'>{this.props.text3.map(item => { return <div className='six-z' onClick={() => { window.open(item.href) }}>{item.text}</div> })}</div>
        </div>
        <div className='six-n'>
          <div className='six-o'>
            <div className='six-p'>{this.props.text4}</div>
            <div onClick={() => { window.open(this.props.text5.href) }} className='six-q'>{this.props.text5.text}</div>
          </div>
          <div className='six-r'>
            <div className='six-s'>{this.props.text6.map(item => { return <div onClick={() => { window.open(item.href) }}>{item.text}</div> })}</div>
            <div className='six-t'>{this.props.text7.map(item => { return <div onClick={() => { window.open(item.href) }}>{item.text}</div> })}</div>
          </div>

        </div>
        <div className='six-u'>
          {this.props.text8.map(item => { return <div className='six-v'>{item.map(items => { return <div className='six-w'><img src={items.img} /><div>{items.text}</div></div> })}</div> })}
        </div>
      </div>
    </div>

  }
}