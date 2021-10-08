import AdList from 'components/Ads/AdList'
// import { useSelector } from 'react-redux'

const AdsActive = ({ list, isLoading }) => {
    return isLoading ? <p>Loading...</p> : <AdList list={list} isOwner />
}

export default AdsActive
