import React, { useEffect } from 'react'
import { ListGroup } from 'reactstrap'
import { ITodo } from '../types'
import Todo from './Todo'
import { connect } from 'react-redux'
import { fetchTodos } from '../redux/actions/todos'

interface TodosListProps {
  todos: ITodo[]
  fetchTodos(todos: ITodo[]): void
}

const TodosList = (props: TodosListProps) => {
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then(res => res.json())
      .then(todos => props.fetchTodos(todos))
  }, [])

  let listOfTodos = props.todos.map((todo: ITodo) => (
    <Todo key={todo.id} todo={todo} />
  ))
  return <ListGroup>{listOfTodos}</ListGroup>
}

function mapStateToProps(storeState: any) {
  console.log('store state', storeState)
  return {
    todos: storeState.todos
  }
}

export default connect(
  mapStateToProps,
  { fetchTodos }
)(TodosList)
