const initialState = {
  reservations: []
}

export function reservationReducer(state = initialState, action) {
  switch (action.type) {
    
    case 'SET_RESERVATIONS':
      return {
        ...state,
        reservations: action.reservations
      }

    case 'REMOVE_RESERVATION':
      return { ...state, reservations: state.reservations.filter(reservation => reservation._id !== action.reservationId)}

    case 'UPDATE_RESERVATION':
      const idx = state.reservations.findIndex(reservation => reservation._id === action.reservation._id)
      const updatedReservations = [...state.reservations]
      updatedReservations[idx] = action.reservation
      return { ...state, reservations: updatedReservations}

    case 'ADD_RESERVATION':
      return { reservations: [...state.reservations, action.reservation], ...state }

      default:
        return state
  }
}