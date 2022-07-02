
import './App.css';
import Counter from './components/Counter';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
    <TodoInput/>
    <TodoList/>
    <Counter/>
    </div>
  );
}

export default App;
