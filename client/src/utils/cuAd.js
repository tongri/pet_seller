export const changeAd = ({
    e,
    setAd,
    nested = false,
    nested2 = false,
    name = '',
    name2 = '',
    files = false,
}) => {
    if (files) {
        setAd((state) => ({
            ...state,
            files: {
                ...state.files,
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

export const changeAdAge = ({ value, setAd }) => {
    const [num, measure] = value.split(' ')
    setAd((state) => ({
        ...state,
        age: measure === 'years' ? num : 1,
        days: measure === 'days' ? num : 1,
    }))
}
