import {
    ADS_LOADING,
    ADS_SUCCESS,
    AD_TO_ACTIVE,
    AD_TO_INACTIVE,
    AD_DELETE,
} from '../types'

import axios from '_axios'
import getConfig from 'utils/config'

// @desc    Loads users ads
// @method  GET
export const loadUsersAds = () => async (dispatch, getState) => {
    dispatch({ type: ADS_LOADING })
    try {
        const result = await axios.get(
            '/api/v1/pets/get_my_ads/',
            getConfig(getState)
        )
        dispatch({
            type: ADS_SUCCESS,
            payload: result.data,
        })
    } catch {
        // TODO: Handle errors
    }
}

// @desc    Disactivates ad
// @method  PATCH
export const convertToInactive = (id) => async (dispatch, getState) => {
    try {
        await axios.patch(
            `/api/v1/pets/${id}/`,
            { is_active: false },
            getConfig(getState)
        )
        console.log('After request')
        dispatch({
            type: AD_TO_INACTIVE,
            payload: id,
        })
    } catch (err) {
        console.log('ERROR', err)
        console.log(err.response)
        // TODO: Handle errors
    }
}

// @desc    Activates ad
// @method  PATCH
export const convertToActive = (id) => async (dispatch, getState) => {
    try {
        await axios.patch(
            `/api/v1/pets/${id}/`,
            { is_active: true },
            getConfig(getState)
        )
        dispatch({
            type: AD_TO_ACTIVE,
            payload: id,
        })
    } catch {
        // TODO: Handle errors
    }
}

// @desc    Deletes ad
// @method  PATCH
export const deleteAd = (id) => async (dispatch, getState) => {
    try {
        await axios.delete(`/api/v1/pets/${id}/`, getConfig(getState))

        dispatch({
            type: AD_DELETE,
            payload: id,
        })
    } catch {
        // TODO: Handle errors
    }
}
