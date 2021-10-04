import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import axios from '_axios'

import { getConfigByToken } from 'utils/config'
import { STORAGE_VIEWED } from 'consts/storage'

const useViewed = () => {
    const [ads, setAds] = useState([])
    const token = useSelector((state) => state.users.token)

    useEffect(() => {
        const getData = async () => {
            const list = sessionStorage.getItem(STORAGE_VIEWED) || []

            if (list.length === 0) return

            try {
                const result = await axios.post(
                    '/api/v1/something/',
                    list,
                    getConfigByToken(token)
                )

                setAds(result.data)
            } catch (err) {
                return
            }
        }

        getData()
    }, [token])

    return ads
}

export default useViewed
