import React from 'react';
import CounterContext from '../context/counter-context.js';
import Counter from '../counter/counter.js'

function App() {
  return (
    <div className="parent">
    <CounterContext>
      <Counter />
    </CounterContext>
    </div>
  );
}

export default App;
