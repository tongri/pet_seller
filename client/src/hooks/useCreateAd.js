import { useState } from 'react'

const AD = {
    name: '',
    kind: '',
    breed: '',
    gender: '',
    age: '',
    size: '',
    biography: '',
    photos: {
        main: '',
        photo1: '',
        photo2: '',
        photo3: '',
    },
    health: {
        vac: '',
        alr: '',
        gnr: {
            state: '',
            dsc: '',
        },
        bhv: {
            state: '',
            dsc: '',
        },
    },
    location: {
        country: '',
        city: '',
    },
    contacts: {
        name: '',
        phone: '',
        email: '',
        country: '',
        city: '',
    },
}

const useCreateAd = () => {
    const [ad, setAd] = useState(AD)

    const changeAd = ({
        e,
        nested = false,
        nested2 = false,
        name = '',
        name2 = '',
        files = false,
    }) => {
        if (files) {
            setAd((state) => ({
                ...state,
                photos: {
                    ...state.photos,
                    [e.target.name]: e.target.files[0],
                },
            }))
            return
        }

        if (nested) {
            if (nested2) {
                setAd((state) => ({
                    ...state,
                    [name]: {
                        ...state[name],
                        [name2]: {
                            ...state[name][name2],
                            [e.target.name]: e.target.value,
                        },
                    },
                }))
                return
            }
            setAd((state) => {
                return {
                    ...state,
                    [name]: {
                        ...state[name],
                        [e.target.name]: e.target.value,
                    },
                }
            })

            return
        }

        setAd((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    const changeAdAge = (value) =>
        setAd((state) => ({
            ...state,
            age: value,
        }))

    return [ad, changeAd, changeAdAge]
}

export default useCreateAd
