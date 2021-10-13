import useFetch from 'hooks/useFetch'
import AdList from 'components/Ads/AdList'

const Watchlist = () => {
    const [{ data, isLoading }] = useFetch('/api/v1/favourite/')

    return isLoading ? (
        <p className="text-center">Loading...</p>
    ) : (
        <div className="row mt-4 justify-content-center">
            <div className="col-lg-10 col-sm-12 col-lg-10">
                <AdList list={data} />
            </div>
        </div>
    )
}

export default Watchlist
