
import './App.css';
import {Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar.jsx';
import List from './components/List';
import Form from './components/Form';

function App() {
 
  return (
  
    <div className="App">
   
    <Navbar />
 
    <Routes>
      <Route path='/' element={<List/>}></Route>
      <Route path='/form' element={<Form/>}></Route>
    </Routes> 
   
    </div>
  );
}

export default App;
