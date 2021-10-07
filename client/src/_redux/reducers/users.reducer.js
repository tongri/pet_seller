import { USER_SUCCESS, USER_FAILED, USER_LOADING, USER_LOGOUT } from '../types'

const initialState = {
    id: null,
    token: localStorage.getItem('usr_token') || null,
    isAuthenticated: false,
    isLoading: false,
    username: null,
    recentlyViewed: null,
    recentlyViewedLoading: false,
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_SUCCESS:
            localStorage.setItem('usr_token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
            }
        case USER_FAILED:
            localStorage.removeItem('usr_token')
            return {
                ...state,
                token: null,
                username: null,
                isLoading: false,
                isAuthenticated: false,
            }
        case USER_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case USER_LOGOUT:
            localStorage.removeItem('usr_token')
            return {
                ...state,
                username: null,
                token: null,
                isAuthenticated: false,
            }
        default:
            return state
    }
}

export default Reducer
