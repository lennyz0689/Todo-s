import './App.css';
import { TodoCounter } from './components/TodoCounter/TodoCounter'
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';
import React from 'react';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tender la cama', completed: true},
  {text: 'Hacer el arroz', completed: false},
  {text: 'conseguir trabajo', completed: false},
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter total={17} completed={5}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
