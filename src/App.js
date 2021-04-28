import React from 'react';
import './App.css';
import { TodoList }  from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container-fluid">
      <header className="header">
        <h1>Proyecto TodoList</h1>
        <TodoList className="todolist"/>
      </header>
    </div>
  );
}

export default App;
