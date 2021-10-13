import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import axios from '_axios'

import { getConfigByToken } from 'utils/config'
import { changeAdAge, changeAd } from 'utils/cuAd'

import { AD } from 'consts/ads'

const useUpdateAd = ({ downloadingURL, uploadingURL }) => {
    const [ad, setAd] = useState(AD)
    const token = useSelector((state) => state.users.token)

    const setAdData = (data) => changeAd({ ...data, setAd })
    const setAdAge = (value) => changeAdAge({ value, setAd })

    useEffect(() => {
        const loadAd = async () => {
            try {
                const result = await axios.get(
                    downloadingURL,
                    getConfigByToken(token)
                )

                setAd(
                    Object.fromEntries(
                        Object.entries(result.data).map(([key, value]) => {
                            console.log(value ? value : '')
                            return [key, value ? value : '']
                        })
                    )
                )
            } catch (err) {
                console.log(err)
                return
            }
        }
        loadAd()
        // eslint-disable-next-line
    }, [downloadingURL, token])

    const save = () => {
        const uploadAd = async () => {
            await axios.put(uploadingURL, ad, getConfigByToken(token))
        }

        uploadAd()
    }

    return [ad, setAdData, setAdAge, save]
}

export default useUpdateAd
