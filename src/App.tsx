import React, { useState, useEffect } from 'react'
import './App.css'
import TopNav from './components/TopNav'
import TodosList from './components/TodosList'
import { ITodo } from './types'

const App: React.FC = () => {
  let someTodos: ITodo[] = []
  const [todos, setTodos] = useState(someTodos)
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then(res => res.json())
      .then(todos => setTodos(todos))
  }, [])

  function addTodo(title: string) {
    fetch(`https://jsonplaceholder.typicode.com/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title })
    })
      .then(res => res.json())
      .then((newTodo: ITodo) => {
        let updatedTodos: ITodo[] = [...todos, newTodo]
        setTodos(updatedTodos)
      })
  }

  return (
    <div className="App">
      <TopNav />
      <TodosList todos={todos} />
    </div>
  )
}

export default App
