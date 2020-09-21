const initialState = {
  users: []
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    
    case 'SET_USERS':
      return {
        ...state,
        users: action.users
      }

    case 'REMOVE_USER':
      return { ...state, users: state.users.filter(user => user._id !== action.userId)}

    case 'UPDATE_USER':
      const idx = state.users.findIndex(user => user._id === action.user._id)
      const updatedUsers = [...state.users]
      updatedUsers[idx] = action.user
      return { ...state, users: updatedUsers}

    case 'ADD_USER':
      return { users: [...state.users, action.user], ...state }

      default:
        return state
  }
}