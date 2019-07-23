import React from 'react';
import { CounterContext } from '../context/counter-context.js';

export default class Decrement extends React.Component{
  static contextType = CounterContext;

  render(){
    return(
      <a href="/" onClick={event =>  this.context.decrement(event) }>-</a>
    );
  }
}