const {
    PETS_SUCCESS,
    PETS_LOADING,
    PETS_FILTER_SUCCESS,
} = require('_redux/types')

// Test data
const _temp_list = [
    {
        id: 0,
        name: 'Onix',
        country: 'Ukraine',
        city: 'Kharkiv',
        kind: 'Cat',
        gender: 'Male',
        size: '30-40cm',
        age: '0.5 year',
        date: '10 August',
        birth_date: '25.06.2020',
        favourite: false,
        breed: 'Siamese',
        biography: 'Lorem ipsum...',
        author: 'test1',
        isActive: true,
        contacts: {
            name: 'Viacheslav',
            email: 'iskenderov.vsl@gmail.com',
            phone: '+380950075367',
            country: 'Ukraine',
            city: 'Kharkiv',
        },
        location: {
            country: 'Ukraine',
            city: 'Kharkiv',
        },
        health: {
            vac: 'Distemper',
            alg: 'Food allergy',
            gnr: {
                state: 'Healthy',
                desc: 'Description...',
            },
            bhv: {
                state: 'None',
                desc: 'Description...',
            },
        },
        images: {
            main: 'https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
            image1: 'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3029&q=80',
        },
    },
    {
        id: 1,
        name: 'Pavel',
        country: 'Russia',
        city: 'Moskow',
        kind: 'Dog',
        gender: 'Male',
        size: '60-80cm',
        age: '1 year',
        date: '12 August',
        birth_date: '25.11.2020',
        favourite: true,
        breed: 'Dog',
        biography: 'Lorem ipsum...',
        author: 'test1',
        isActive: false,
        contacts: {
            name: 'Viacheslav',
            email: 'iskenderov.vsl@gmail.com',
            phone: '+380950075367',
            country: 'Russia',
            city: 'Saint Peterburg',
        },
        location: {
            country: 'Russia',
            city: 'Moskow',
        },
        health: {
            vac: 'Distemper',
            alg: 'None',
            gnr: {
                state: 'Healthy',
                desc: 'Description...',
            },
            bhv: {
                state: 'None',
                desc: 'Description...',
            },
        },
        images: {
            main: 'https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=778&q=80',
            image1: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1674&q=80',
        },
    },
]

const initialState = {
    isLoading: false,
    list: [],
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
                list: action.payload,
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
