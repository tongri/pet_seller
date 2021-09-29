import { ERROR_CLEAR, ERROR_CREATE } from '_redux/types'

export const createError = (msg) => (dispatch) =>
    dispatch({ type: ERROR_CREATE, payload: msg })

export const clearError = () => (dispatch) => dispatch({ type: ERROR_CLEAR })
