import {
    USER_SUCCESS,
    USER_FAILED,
    USER_LOADING,
    RECENTLY_VIEWED_SUCCESS,
    RECENTLY_VIEWED_LOADING,
} from '../types'

const initialState = {
    token: localStorage.getItem('usr_token'),
    isAuthenticated: false,
    isLoading: false,
    user: null,
    recentlyViewed: null,
    recentlyViewedLoading: false,
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_SUCCESS:
            localStorage.setItem('usr_token', action.payload.token)
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                isAuthenticated: true,
                isLoading: false,
            }
        case USER_FAILED:
            return {
                ...state,
                token: null,
                user: null,
                isLoading: false,
                isAuthenticated: false,
            }
        case USER_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case RECENTLY_VIEWED_LOADING:
            return {
                ...state,
                recentlyViewedLoading: true,
            }
        case RECENTLY_VIEWED_SUCCESS:
            return {
                ...state,
                recentlyViewedLoading: false,
                recentlyViewed: action.payload,
            }
        default:
            return state
    }
}

export default Reducer
