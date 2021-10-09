import {
    ADS_LOADING,
    ADS_SUCCESS,
    AD_TO_ACTIVE,
    AD_TO_INACTIVE,
    AD_DELETE,
} from '_redux/types'

const initialState = {
    active: [],
    inactive: [],
    isLoading: false,
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADS_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case ADS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                active: action.payload.filter((ad) => ad.is_active),
                inactive: action.payload.filter((ad) => !ad.is_active),
            }
        case AD_TO_INACTIVE:
            return {
                ...state,
                inactive: [
                    ...state.inactive,
                    state.active.find((ad) => ad.id === action.payload),
                ],
                active: state.active.filter((ad) => ad.id !== action.payload),
            }
        case AD_TO_ACTIVE:
            return {
                ...state,
                active: [
                    ...state.active,
                    state.inactive.find((ad) => ad.id === action.payload),
                ],
                inactive: state.inactive.filter(
                    (ad) => ad.id !== action.payload
                ),
            }
        case AD_DELETE:
            return {
                ...state,
                inactive: state.inactive.filter(
                    (ad) => ad.id !== action.payload
                ),
            }
        default:
            return state
    }
}

export default Reducer
