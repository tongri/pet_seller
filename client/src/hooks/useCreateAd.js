import { useState } from 'react'
import { useSelector } from 'react-redux'

import axios from '_axios'

import { changeAdAge, changeAd } from 'utils/cuAd'
import { getConfigByToken } from 'utils/config'

import { AD } from 'consts/ads'

const convertToFormData = (value) => {
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

            const userRequest = axios.patch(
                `/api/v1/user/${id}/`,
                ad.contacts,
                getConfigByToken(token)
            )

            await Promise.all([petRequest, userRequest])
        } catch (err) {
            console.log(err)
        }
    }

    return [ad, setAdData, setAdAge, save]
}

export default useCreateAd
