import React from 'react';

import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
function App() {
  const  personName ={
    first:"Bruce",
    last:"Smith"
  }
  return (
    <div className="App">
    <Greet name="anmol" msg={10} isLoggedIn={true} />
    <Person name={personName}/>
    <PersonList/>
    </div>
  );
}

export default App;
