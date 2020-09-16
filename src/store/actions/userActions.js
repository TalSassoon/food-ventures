import { userService } from '../../services/userService'

export function loadUsers() {
    return async dispatch => {
        const users = await userService.query()
        dispatch({ type: 'SET_USERS', users })
    }
}

export function removeUser(userId) {
    return async dispatch => {
        await userService.remove(userId)
        dispatch({ type: 'REMOVE_USER', userId })
    }
}

export function saveUser(user) {
    return async dispatch => {
        const actionType = user._id ? 'UPDATE_USER' : 'ADD_USER'
        user = await userService.save(user)
        dispatch({ type: actionType, user })
    }
}