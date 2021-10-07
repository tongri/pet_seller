import { useState } from 'react'
import { useSelector } from 'react-redux'
// import { serialize } from 'object-to-formdata'

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
        // const form = new FormData(
        // const test = convert2FormData(ad)
        const form = convertToFormData({
            ...ad,
            files: Object.values(ad.files).filter((el) => el !== ''),
            owner: id,
        })

        try {
            await axios.post(
                '/api/v1/pets/',
                form,
                getConfigByToken(token, true)
            )
        } catch (err) {
            console.log(err.response)
        }

        // for (let key in ad) form.append(key, ad[key])
        // form.append('asd', 'test')
        // console.log(Object.fromEntries(Object.entries(test)))
        // console.log(test.get('name'))

        // test.forEach((value, key) => {
        //     if (typeof value === 'object')
        //         console.log('OBJECT', value.entries())
        //     console.log(key, value)
        // })
    }

    return [ad, setAdData, setAdAge, save]
}

export default useCreateAd
