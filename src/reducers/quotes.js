export default (state = [], action) => {
  let idx = state.findIndex(b => {
    return b.id === action.quoteId
  })
  let quote = state.find(q => {
    return q.id === action.quoteId
  })
  switch (action.type) {
    case 'ADD_QUOTE':
      return [
        ...state,
        action.quote
      ]
    case 'REMOVE_QUOTE':
      return [
        ...state.slice(0, idx), ...state.slice(idx+1)
      ]
    case 'UPVOTE_QUOTE':
      quote.votes += 1
      return [
        ...state.slice(0, idx), quote, ...state.slice(idx+1)
      ]
    case 'DOWNVOTE_QUOTE':
      quote.votes > 0 ? quote.votes -= 1 : null
      return [
        ...state.slice(0, idx), quote, ...state.slice(idx+1)
      ]
    default:
     return state
  }
}
