import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import axios from '_axios'

import { getConfigByToken } from 'utils/config'
import { changeAdAge, changeAd, convertToFormData } from 'utils/cuAd'

import { AD } from 'consts/ads'

const useUpdateAd = ({ downloadingURL, uploadingURL }) => {
    const [ad, setAd] = useState(AD)
    const token = useSelector((state) => state.token)

    const setAdData = (data) => changeAd({ ...data, setAd })
    const setAdAge = (value) => changeAdAge({ value, setAd })

    useEffect(() => {
        const loadAd = async () => {
            try {
                const result = await axios.get(
                    downloadingURL,
                    getConfigByToken(token)
                )

                const result_ad = Object.fromEntries(
                    Object.entries(result.data).map(([key, value]) => [
                        key,
                        value != null ? value : '',
                    ])
                )

                setAd({
                    ...result_ad,
                    files: Object.fromEntries(
                        result_ad.files.map((el, key) => {
                            if (key === 0) return ['main', el]

                            return [`image${key}`, el]
                        })
                    ),
                })
            } catch {
                // TODO: Handle errors...
            }
        }
        loadAd()
        // eslint-disable-next-line
    }, [downloadingURL, token])

    const save = () => {
        const uploadAd = async () => {
            try {
                const { owner, contacts, ...ad_data } = ad

                const form = convertToFormData({
                    ...ad_data,
                    files: Object.values(ad.files).filter(
                        (el) => el !== '' && el instanceof File
                    ),
                })

                await axios.patch(
                    uploadingURL,
                    form,
                    getConfigByToken(token, true)
                )
            } catch {
                // TODO: Handle errors...
            }
        }

        uploadAd()
    }

    return [ad, setAdData, setAdAge, save]
}

export default useUpdateAd
