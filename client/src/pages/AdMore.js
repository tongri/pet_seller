import { useEffect } from 'react'
import { useParams } from 'react-router'
import useRetrieveAd from 'hooks/useRetrieveAd'

import addAd from 'utils/rviewed'
import AdDetails from 'components/Layout/AdDetails'

const AdMore = () => {
    const { id } = useParams()
    const [ad, isLoading] = useRetrieveAd(+id)

    useEffect(() => addAd(id), [id])

    return isLoading ? <p>Loading...</p> : <AdDetails ad={ad} id={id} />
}

export default AdMore
