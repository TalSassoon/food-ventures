import { reservationService } from '../../services/reservationService'

export function loadReservations(filterBy, sortBy) {
    return async dispatch => {
        const reservations = await reservationService.query(filterBy, sortBy)
        dispatch({ type: 'SET_RESERVATIONS', reservations })
    }
}

export function removeReservation(reservationId) {
    return async dispatch => {
        await reservationService.remove(reservationId)
        dispatch({ type: 'REMOVE_RESERVATION', reservationId })
    }
}

export function saveReservation(reservation) {
    return async dispatch => {
        const actionType = reservation._id ? 'UPDATE_RESERVATION' : 'ADD_RESERVATION'
        reservation = await reservationService.save(reservation)
        dispatch({ type: actionType, reservation })
    }
}