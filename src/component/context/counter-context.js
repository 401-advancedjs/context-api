import React from 'react';

export const CounterContext = React.createContext();

export default class ContextProvider extends React.Component{
  constructor(props){
    super(props);
    this.state = {};

    this.state.count = 0;
    this.state.increment = this.increment;
    this.state.decrement = this.decrement;
  }

  increment = event => {
    event.preventDefault();
    let count = this.state.count + 1;
    this.setState({ count });
  }

  decrement = event => {
    event.preventDefault();
    let count = this.state.count - 1;
    this.setState({ count });
  }

  render(){
    return(
      <CounterContext.Provider value={this.state}>
        { this.props.children }
      </CounterContext.Provider>
    );
  }
}