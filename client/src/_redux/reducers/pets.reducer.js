const {
    PETS_SUCCESS,
    PETS_LOADING,
    PETS_FILTER_SUCCESS,
} = require('_redux/types')

const initialState = {
    isLoading: false,
    list: [],
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case PETS_SUCCESS:
            return {
                ...state,
                list: action.payload,
                isLoading: false,
            }
        case PETS_FILTER_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                list: action.payload,
                isLoading: false,
            }
        case PETS_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        default:
            return state
    }
}

export default Reducer
