import { useState } from 'react'
import { useSelector } from 'react-redux'

import axios from '_axios'

import { changeAdAge, changeAd } from 'utils/cuAd'
import { getConfigByToken } from 'utils/config'

import { AD } from 'consts/ads'

import { convertToFormData } from 'utils/cuAd'

const useCreateAd = () => {
    const [ad, setAd] = useState(AD)
    const { id, token } = useSelector((state) => state.users)

    const setAdData = (data) => changeAd({ ...data, setAd })
    const setAdAge = (value) => changeAdAge({ value, setAd })

    const save = async () => {
        const form = convertToFormData({
            ...ad,
            files: Object.values(ad.files).filter((el) => el !== ''),
            owner: id,
        })

        try {
            const petRequest = axios.post(
                '/api/v1/pets/',
                form,
                getConfigByToken(token, true)
            )

            const contacts = Object.fromEntries(
                Object.entries(ad.contacts).filter(([_, val]) => val !== '')
            )

            const userRequest = axios.patch(
                `/api/v1/user/${id}/`,
                contacts,
                getConfigByToken(token)
            )

            await Promise.all([petRequest, userRequest])
        } catch {
            // TODO: Handle errors...
        }
    }

    return [ad, setAdData, setAdAge, save]
}

export default useCreateAd
