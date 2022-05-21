import React from 'react';

import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading'
import Oscar from './components/Oscar';
function App() {
  const  personName ={
    first:"Bruce",
    last:"Smith"
  }
  const nameList =[{
    first:"Bruce",
    last:"Smith"
  },{
    first:"Bruce",
    last:"S"
  },{
    first:"Bruce",
    last:"Sm"
  }]
  return (
    <div className="App">
    {/* <Greet name="anmol" msg={10} isLoggedIn={true} />
    <Person name={personName}/>
    <PersonList names={nameList}/>
    <Status status='error'/> */}
    <Oscar><Heading> oscar goes to Anmol</Heading></Oscar>
    </div>
  );
}

export default App;
