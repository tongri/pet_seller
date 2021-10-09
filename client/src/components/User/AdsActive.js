import AdList from 'components/Ads/AdList'

const AdsActive = ({ list, isLoading }) => {
    return isLoading ? <p>Loading...</p> : <AdList list={list} isOwner />
}

export default AdsActive
