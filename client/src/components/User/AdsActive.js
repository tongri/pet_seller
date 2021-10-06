import AdList from 'components/Ads/AdList'
import { useSelector } from 'react-redux'

import useFetch from 'hooks/useFetch'

const AdsActive = () => {
    const { data, isLoading, isError } = useFetch('/api/v1/pets/get_my_ads/')[0]

    return isLoading ? <p>Loading...</p> : <AdList list={data} isOwner />
}

export default AdsActive
