import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import axios from '_axios'
import { getConfigByToken } from 'utils/config'

import { AD } from 'consts/ads'
import { changeAdAge, changeAd } from 'utils/cuAd'

const useUpdateAd = ({ downloadingURL, uploadingURL, testing }) => {
    const [ad, setAd] = useState(AD)
    const token = useSelector((state) => state.users.token)
    const firstAd = useSelector((state) => state.pets.list[0])

    useEffect(() => {
        console.log('USE UPDATE AD')
        const loadAd = async () => {
            try {
                const result = await axios.get(
                    downloadingURL,
                    getConfigByToken(token)
                )

                setAd(result.data)
            } catch {
                return
            }
        }
        testing ? setAd(firstAd) : loadAd()
    }, [downloadingURL, token])

    const save = () => {
        const uploadAd = async () => {
            await axios.put(uploadingURL, ad, getConfigByToken(token))
        }

        uploadAd()
    }

    const setAdData = (data) => changeAd({ ...data, setAd })
    const setAdAge = (value) => changeAdAge({ value, setAd })

    return [ad, { setAdData, setAdAge }, save]
}

export default useUpdateAd
