import useViewed from 'hooks/useViewed'

import AdList from 'components/Ads/AdList'

const RecentlyViewed = () => {
    const ads = useViewed()

    return (
        <div className="container">
            <AdList list={ads} />
        </div>
    )
}

export default RecentlyViewed
