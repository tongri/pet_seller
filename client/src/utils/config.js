const config = {
    headers: {
        'Content-type': 'application/json',
    },
}

const getConfig = (getState) => {
    const token = getState().users.token
    if (token) config.headers['Authorization'] = `JWT ${token}`

    return config
}

export default getConfig
