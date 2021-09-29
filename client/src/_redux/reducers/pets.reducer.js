const {
    PETS_SUCCESS,
    PETS_LOADING,
    PETS_FILTER_SUCCESS,
} = require('_redux/types')

// Test data
const _temp_list = [
    {
        name: 'Onix',
        country: 'Ukraine',
        city: 'Kharkiv',
        kind: 'Cat',
        gender: 'Male',
        size: '30-40cm',
        age: '0.5 year',
        health: 'Healthy',
        date: '10 August',
        birth_date: '25.06.2020',
        favourite: false,
    },
    {
        name: 'Pavel',
        country: 'Russia',
        city: 'Moskow',
        kind: 'Dog',
        gender: 'Male',
        size: '60-80cm',
        age: '1 year',
        health: 'Sick',
        date: '12 August',
        birth_date: '25.11.2020',
        favourite: true,
    },
]

const initialState = {
    isLoading: false,
    list: _temp_list,
    countries: _temp_list.map((el) => el.country),
    cities: _temp_list.map((el) => el.city),
    kinds: _temp_list.map((el) => el.kind),
    genders: _temp_list.map((el) => el.gender),
    sizes: _temp_list.map((el) => el.size),
    ages: _temp_list.map((el) => el.age),
    health: _temp_list.map((el) => el.health),
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case PETS_SUCCESS:
            return {
                ...state,
                ...action.payload,
                list: action.payload.pets,
                isLoading: false,
            }
        case PETS_FILTER_SUCCESS:
            return {
                ...state,
                list: action.payload.pets,
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
