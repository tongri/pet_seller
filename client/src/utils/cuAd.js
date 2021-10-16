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
            [e.target.name]: e.target.files[0],
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

export const convertNullToEmpty = (data) =>
    Object.fromEntries(
        Object.entries(data).map(([key, value]) => [
            key,
            value != null ? value : '',
        ])
    )

export const convertFiles = (data) => ({
    ...data,
    files: Object.fromEntries(
        data.files.map((el, key) => {
            if (key === 0) return ['main', el]
            return [`image${key}`, el]
        })
    ),
})
