import AdList from 'components/Ads/AdList'

const AdsInActive = ({ list, isLoading }) => {
    return isLoading ? (
        <p>Loading...</p>
    ) : (
        <>
            <AdList list={list} isOwner isActive={false} />
        </>
    )
}

export default AdsInActive
