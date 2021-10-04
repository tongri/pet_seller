import useViewed from 'hooks/useViewed'

import AdList from 'components/Ads/AdList'

const RecentlyViewed = () => {
    const ads = useViewed()

    return <AdList list={ads} />
}

export default RecentlyViewed
