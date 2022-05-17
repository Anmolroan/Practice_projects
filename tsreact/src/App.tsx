import React from 'react';

import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter init={0}>
        <button>add 1</button>
        <button>add 2</button>
        <button>add 3</button>
      </Counter>
    </div>
  );
}

export default App;
