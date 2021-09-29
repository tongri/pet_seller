import axios from '_axios'
import getConfig from 'utils/config'

import { PETS_FILTER_SUCCESS, PETS_LOADING, PETS_SUCCESS } from '_redux/types'

// @desc    Uplaod pets data
// @method  GET
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

// @desc    Filter pets data
// @method  GET
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
