import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getConfigByToken } from 'utils/config'

import axios from '_axios'

const useSelect = () => {
    const [cities, setCities] = useState([])
    const [country, setCountry] = useState()
    const token = useSelector((state) => state.users.token)

    useEffect(() => {
        const fetch = async () => {
            try {
                const result = await axios.get(
                    `/api/v1/get-cities/?country=${country}`,
                    getConfigByToken(token)
                )
                setCities(result.data.cities)
            } catch {
                // TODO: Handle exceptions...
            }
        }

        fetch()
    }, [country, token])

    return [cities, setCountry]
}

export default useSelect
