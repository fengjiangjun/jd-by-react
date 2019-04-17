import React from 'react';
import './index.css';
export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return <div className='edging-a'>
      <div className='edging-b'></div>
      <div className='edging-c'> </div>
    </div>
  }
}