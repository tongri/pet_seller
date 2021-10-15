import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { getConfigByToken } from 'utils/config'

import axios from '_axios'

import { AD } from 'consts/ads'

const useRetrieveAd = (id, personal = false) => {
    const [ad, setAd] = useState(AD)
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState('')
    const token = useSelector((state) => state.users.token)

    useEffect(() => {
        const retrieveAd = async () => {
            setIsLoading(true)
            try {
                const result = await axios.get(
                    `/api/v1/pets/${id}/${personal ? 'personal' : ''}`,
                    getConfigByToken(token)
                )

                setAd(result.data)
                setIsLoading(false)
            } catch {
                setErrors('Something went wrong')
                setIsLoading(false)
            }
        }

        retrieveAd()
    }, [id, token, personal])

    return [ad, isLoading, errors]
}

export default useRetrieveAd
