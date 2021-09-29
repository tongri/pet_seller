import { ERROR_CLEAR, ERROR_CREATE } from '_redux/types'

const initialState = {
    message: null,
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ERROR_CREATE:
            return {
                ...state,
                message: action.payload,
            }
        case ERROR_CLEAR:
            return {
                ...state,
                message: null,
            }
        default:
            return state
    }
}

export default Reducer
