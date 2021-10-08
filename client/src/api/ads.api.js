import axios from '_axios'

export const changeAdState = async ({ id, isActive, config }) =>
    await axios.patch(`/api/v1/pets/${id}/`, { is_active: isActive }, config)
