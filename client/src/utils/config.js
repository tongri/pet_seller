const config = {
    headers: {
        'Content-type': 'application/json',
    },
}

const multiPartConfig = {
    headers: {
        'Content-type': 'multipart/form-data',
    },
}

const getConfig = (getState) => {
    const token = getState().users.token
    if (token) config.headers['Authorization'] = `Token ${token}`

    return config
}

export const getConfigByToken = (token, multiPart = false) => {
    const tmp = multiPart ? multiPartConfig : config
    if (token) tmp.headers['Authorization'] = `Token ${token}`
    return tmp
}

export default getConfig
