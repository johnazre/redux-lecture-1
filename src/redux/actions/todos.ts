export const fetchTodos = (todos: any) => {
  return {
    type: 'FETCH_TODOS',
    payload: todos
  }
}
