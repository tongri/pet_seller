import axios from '_axios'

export const editAdState = async ({ id, isActive, config }) =>
    await axios.patch(`/api/v1/pets/${id}/`, { is_active: isActive }, config)

export const deleteAd = async ({ id, config }) =>
    await axios.delete(`/api/v1/pets/${id}/`, config)

export const saveUserSettings = async ({ id, data, config }) => {
    try {
        await axios.patch(`/api/v1/user/${id}/`, data, config)
    } catch (err) {
        console.log(err.response)
    }
}
