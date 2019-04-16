import React from 'react';
import './index.css';
export default props => {
  const img = props.img;
  const txt = props.txt;
  return <div className='two'>
    <div className='one'>
      <div className='three' onMouseEnter={props.enter} onMouseLeave={props.leave}>
        <img src={props.five} />
        <div >{txt[0].txt1}</div>
        <div className='five' style={{ display: props.display }}>{props.six.map(item => {
          return <div>{item.map((items) => {
            return <div>{items}</div>
          })}</div>
        })}</div>
      </div>
    </div>
    <div className='four'>
      <div>
        {props.two.map((item, index) => {
          return <div onClick={() => { if (item.href) { window.open(item.href) } }} onMouseEnter={() => { if (index == 5) props.enters() }} onMouseLeave={() => { if (index == 5) props.leaves() }}>
            {item.text}
            {index == 5 && <div style={{ display: props.displays }} className='enterprise-procurement'>{props.seven.map(item => { return <div className='type' >{item.map(items => { return <div>{items}</div> })}</div> })}</div>}
          </div>
        })}
      </div>
    </div>
  </div>
}