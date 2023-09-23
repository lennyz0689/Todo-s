import './App.css';
import { TodoCounter } from '../components/TodoCounter/TodoCounter'
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';
import React from 'react';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Tender la cama', completed: true },
//   { text: 'Hacer el arroz', completed: false },
//   { text: 'conseguir trabajo', completed: true },
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

function App({
  totalTodos,
  completedTodos,
  search,
  setSearch,
  searchtext,
  completeTodo,
  deleteTodo
}) {

  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch search={search} setSearch={setSearch} />

      <TodoList>
        {searchtext.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
