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
        age: measure === 'years' ? num : 0,
        days: measure === 'days' ? num : 0,
    }))
}

export const convertToFormData = (value) => {
    const form = new FormData()

    for (let key in value) {
        if (typeof value[key] === 'object' && value[key] !== null) {
            if (Array.isArray(value[key]))
                for (let item of value[key]) form.append(key, item)
            else
                for (let subkey in value[key])
                    form.append(subkey, value[key][subkey])
        } else form.append(key, value[key])
    }

    return form
}

export const handlePhotoChange = ({ e, setState }) => {
    setState((form) => ({
        ...form,
        files: {
            ...form.files,
            [e.target.name]: e.target.value,
        },
    }))
}

export const handleInputChange = ({ e, setState }) =>
    setState((form) => ({ ...form, [e.target.name]: e.target.value }))

export const handleContactsChange = ({ e, setState }) =>
    setState((form) => ({
        ...form,
        contacts: { ...form.contacts, [e.target.name]: e.target.value },
    }))

export const handleAgeChange = ({ value, setState }) => {
    const [num, measure] = value.split(' ')
    setState((state) => ({
        ...state,
        age: measure === 'years' ? num : 0,
        days: measure === 'days' ? num : 0,
    }))
}
