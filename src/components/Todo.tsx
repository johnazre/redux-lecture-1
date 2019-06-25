import React from 'react'
import { ListGroupItem } from 'reactstrap'
import { ITodo } from '../types'

interface TodoProps {
  todo: ITodo
}

const Todo = (props: TodoProps) => {
  return <ListGroupItem>{props.todo.title}</ListGroupItem>
}

export default Todo
