import React from 'react';
import { CounterContext } from '../context/counter-context.js';

export default class Increment extends React.Component{
  static contextType = CounterContext;

  render(){
    return(
      <a href="/" onClick={ event => this.context.increment(event) }>+</a>
    );
  }
}