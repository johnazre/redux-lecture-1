import React from 'react'
import { ListGroup } from 'reactstrap'
import { ITodo } from '../types'
import Todo from './Todo'

interface TodosListProps {
  todos: ITodo[]
}

const TodosList = (props: TodosListProps) => {
  let listOfTodos = props.todos.map(todo => <Todo key={todo.id} todo={todo} />)
  return <ListGroup>{listOfTodos}</ListGroup>
}
export default TodosList
