import axios from '_axios'
import getConfig from 'utils/config'

import { PETS_LOADING, PETS_SUCCESS } from '_redux/types'

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
