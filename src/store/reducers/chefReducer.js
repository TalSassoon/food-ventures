const initialState = {
  toys: []
}

export function chefReducer(state = initialState, action) {
  switch (action.type) {
    
    case 'SET_TOYS':
      return {
        ...state,
        toys: action.toys
      }

    case 'REMOVE_TOY':
      return { ...state, toys: state.toys.filter(toy => toy._id !== action.toyId)}

    case 'UPDATE_TOY':
      const idx = state.toys.findIndex(toy => toy._id === action.toy._id)
      const updatedToys = [...state.toys]
      updatedToys[idx] = action.toy
      return { ...state, toys: updatedToys}

    case 'ADD_TOY':
      // const allToys = [...state.toys]
      // allToys.push(action.toy)

      return { toys: [...state.toys, action.toy], ...state }

      default:
        return state
  }
}