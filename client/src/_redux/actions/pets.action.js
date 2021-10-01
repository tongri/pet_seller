import axios from '_axios'
import getConfig from 'utils/config'

import { PETS_FILTER_SUCCESS, PETS_LOADING, PETS_SUCCESS } from '_redux/types'

// @desc        Uplaod pets data
// @method      GET
// @permissions Any
export const loadPets = () => async (dispatch, getState) => {
    // loading...
    dispatch({ type: PETS_LOADING })

    try {
        const result = await axios.get('/api/v1/pets/', getConfig(getState))

        dispatch({
            type: PETS_SUCCESS,
            payload: result.data,
        })
    } catch (err) {
        // TODO: Handle errors...
    }
}

// @desc        Filter pets data
// @method      GET
// @permissions Any
export const filterPets = (filter) => async (dispatch, getState) => {
    dispatch({ type: PETS_LOADING })

    try {
        const config = {
            ...getConfig(getState),
            params: { filter },
        }

        const result = await axios.get('/api/v1/pets/', config)
        dispatch({
            type: PETS_FILTER_SUCCESS,
            payload: result.datas,
        })
    } catch (err) {
        // TODO: Handle errors...
    }
}

// @desc        Add Ad to favourite
// @method      POST
// @permissions Authenticated only
export const makeFavourite = (ad_id) => async (_, getState) => {
    try {
        await axios.post(
            '/api/v1/ads/favourite/add/',
            ad_id,
            getConfig(getState)
        )
    } catch (err) {
        // TODO: Handle errors...
    }
}
