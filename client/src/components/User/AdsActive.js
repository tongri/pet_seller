import AdList from 'components/Ads/AdList'
import { useSelector } from 'react-redux'

// import useFetch from 'hooks/useFetch'

const AdsActive = () => {
    // const { data, isLoading, isError } = useFetch('/api/v1/my-pets/')[0]
    const data = useSelector((state) => state.pets.list)

    return (
        <>
            <AdList list={data} isOwner />
        </>
    )
}

export default AdsActive