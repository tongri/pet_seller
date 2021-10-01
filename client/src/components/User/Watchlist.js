import AdList from 'components/Ads/AdList'

const Watchlist = ({ list }) => {
    return (
        <div className="row mt-4 justify-content-center">
            <div className="col-lg-10 col-sm-12 col-lg-10">
                <AdList list={list} />
            </div>
        </div>
    )
}

export default Watchlist
