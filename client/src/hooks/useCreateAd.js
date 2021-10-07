import { useState } from 'react'
import { useSelector } from 'react-redux'
import { serialize } from 'object-to-formdata'

import axios from '_axios'

import { changeAdAge, changeAd } from 'utils/cuAd'
import { getConfigByToken } from 'utils/config'

import { AD } from 'consts/ads'

const useCreateAd = () => {
    const [ad, setAd] = useState(AD)
    const { id, token } = useSelector((state) => state.users)

    const setAdData = (data) => changeAd({ ...data, setAd })
    const setAdAge = (value) => changeAdAge({ value, setAd })

    const save = async () => {
        // const form = new FormData(
        // const test = convert2FormData(ad)
        const form = serialize({
            ...ad,
            files: Object.values(ad.files).filter((el) => el !== ''),
            owner: id,
        })
        console.log({
            ...ad,
            files: Object.values(ad.files).filter((el) => el !== ''),
            owner: id,
        })

        for (let value in form.values()) {
            console.log(value)
        }

        try {
            const result = await axios.post(
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
