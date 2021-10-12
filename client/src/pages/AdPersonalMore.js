import { useEffect } from 'react'
import { useParams } from 'react-router'
import useRetrieveAd from 'hooks/useRetrieveAd'

import addAd from 'utils/rviewed'
import AdDetails from 'components/Layout/AdDetails'

const AdPersonalMore = () => {
    const { id } = useParams()
    const [ad, isLoading] = useRetrieveAd(+id, true)

    useEffect(() => addAd(id), [id])

    return isLoading ? <p>Loading...</p> : <AdDetails ad={ad} id={id} />
}

export default AdPersonalMore
