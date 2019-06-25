export default (state = [], action: any) => {
  console.log('reducer fired', action)
  switch (action.type) {
    case 'FETCH_TODOS':
      return action.payload

    default:
      return state
  }
}
