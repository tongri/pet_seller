import AdList from 'components/Ads/AdList'
import { useSelector } from 'react-redux'

// import useFetch from 'hooks/useFetch'

const AdsInActive = ({ list, isLoading }) => {
    // const { data, isLoading, isError } = useFetch('/api/v1/my-pets/')[0]

    return isLoading ? (
        <p>Loading...</p>
    ) : (
        <>
            <AdList list={list} isOwner isActive={false} />
        </>
    )
}

export default AdsInActive
