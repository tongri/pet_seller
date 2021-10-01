import axios from '_axios'
import getConfig from 'utils/config'

import {
    USER_SUCCESS,
    USER_LOADING,
    RECENTLY_VIEWED_SUCCESS,
    RECENTLY_VIEWED_LOADING,
    USER_LOGOUT,
} from '../types'

// @desc    Records users token and username, switches isAuthenticated to True
// @method  POST
export const loginUser = (data) => async (dispatch, getState) => {
    dispatch({ type: USER_LOADING })

    try {
        const result = await axios.post(
            '/api/v1/login/',
            data,
            getConfig(getState)
        )

        dispatch({
            type: USER_SUCCESS,
            payload: result.data,
        })
    } catch (err) {
        // TODO: Handler errors...
    }
}

// @desc    Creates user account
// @method  POST
export const registerUser = (data) => async (dispatch, getState) => {
    dispatch({ type: USER_LOADING })

    try {
        const result = await axios.post(
            '/api/v1/reg/',
            data,
            getConfig(getState)
        )

        dispatch({
            type: USER_SUCCESS,
            payload: result.data,
        })
    } catch (err) {
        // TODO: Handle errors...
    }
}

// @desc    Verifies if token is valid
// @method  POST
export const verifyToken = () => async (dispatch, getState) => {
    try {
        const result = await axios.post(
            '/api/v1/token-verify/',
            null,
            getConfig(getState)
        )

        dispatch({
            type: USER_SUCCESS,
            payload: result.data,
        })
    } catch (err) {
        // TODO: Handle errors...
    }
}

// @desc    Gets recently viewed Ads
// @method  GET
export const loadRecentlyViewed = () => async (dispatch, getState) => {
    dispatch({ type: RECENTLY_VIEWED_LOADING })
    try {
        const result = await axios.get('/api/v1/recently-viewed/')

        dispatch({
            type: RECENTLY_VIEWED_SUCCESS,
            payload: result.data,
        })
    } catch (err) {
        // TODO: Handle errors
    }
}

// @desc    Log out user
export const logoutUser = () => (dispatch) => dispatch({ type: USER_LOGOUT })
