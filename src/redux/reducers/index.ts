import { combineReducers } from 'redux'
import todosReducer from './todos'

let reducers: any = {
  todos: todosReducer
}

export default combineReducers(reducers)
