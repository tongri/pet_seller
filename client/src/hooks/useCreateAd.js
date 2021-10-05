import { useState } from 'react'

import { AD } from 'consts/ads'
import { changeAdAge, changeAd } from 'utils/cuAd'

const useCreateAd = () => {
    const [ad, setAd] = useState(AD)

    const setAdData = (data) => changeAd({ ...data, setAd })
    const setAdAge = (value) => changeAdAge({ value, setAd })

    return [ad, setAdData, setAdAge]
}

export default useCreateAd
