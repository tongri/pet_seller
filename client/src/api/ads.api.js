import axios from '_axios'

export const saveUserSettings = async ({ id, data, config }) => {
    try {
        await axios.patch(`/api/v1/user/${id}/`, data, config)
    } catch (err) {
        // TODO: Handle errors...
    }
}

export const createPetRequest = ({ data, config }) =>
    axios.post('api/v1/pets/', data, config)

export const retrievePetRequest = ({ id, config }) =>
    axios.get(`/api/v1/pets/${id}/personal`, config)

export const updatePetRequest = ({ id, data, config }) =>
    axios.patch(`/api/v1/pets/${id}/personal/`, data, config)

export const updateContactRequest = ({ id, data, config }) =>
    axios.patch(`api/v1/user/${id}/`, data, config)
