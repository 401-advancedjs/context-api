import React from 'react';
import './counter.scss';

import { CounterContext } from '../context/counter-context.js';
import Increment from './incremement.js';
import Decrement from './decrement.js';

export default class Counter extends React.Component{
  static contextType = CounterContext;

  render(){
    return(
      <>
        <div className="container">
        <Increment />
        <p>{ this.context.count }</p>
        <Decrement />
        </div>
      </>
    );
  }
}