import React from 'react';
import './App.css';
import Add from'./components/Add';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App-header">
     <Add/>
     <TodoList/>
    </div>
  );
}

export default App;
