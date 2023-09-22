import './App.css';
import { TodoCounter } from './components/TodoCounter/TodoCounter'
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';
import React from 'react';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tender la cama', completed: true },
  { text: 'Hacer el arroz', completed: false },
  { text: 'conseguir trabajo', completed: true },
]

function App() {

  const [todos, setTodos] = React.useState(defaultTodos)
  const [search, setSearch] = React.useState('')

  const completedTodos = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length
  const searchtext = todos.filter(todo => todo.text.toLowerCase().includes(search.toLowerCase()))

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos[todoIndex].completed = true
    setTodos(newTodos)
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }

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
