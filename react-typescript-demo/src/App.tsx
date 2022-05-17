import React from 'react';

import './App.css';
import Greet from './components/Greet'
function App() {
  return (
    <div className="App">
   <Greet name="anmol" messageCount={20}/>
    </div>
  );
}

export default App;
