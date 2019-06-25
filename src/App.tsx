import React, { useState, useEffect } from 'react'
import './App.css'
import TopNav from './components/TopNav'
import TodosList from './components/TodosList'
import { ITodo } from './types'

const App: React.FC = () => {
  return (
    <div className="App">
      <TopNav />
      <TodosList />
    </div>
  )
}

export default App
