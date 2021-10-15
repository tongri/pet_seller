import { useSelector } from 'react-redux'

import Header from 'components/Layout/Header'
import AdList from 'components/Ads/AdList'
import Filter from 'components/Filter/Filter'

const Main = () => {
    const { list, isLoading } = useSelector((state) => state.pets)

    return (
        <>
            <Header />

            <div className="container-fluid row justify-content-center gap-5 mt-5">
                <div className="col-md-2">
                    <Filter />
                </div>
                <div className="col-md-6">
                    {isLoading ? (
                        <p className="text-center">Loading...</p>
                    ) : (
                        <AdList list={list} />
                    )}
                </div>
            </div>
        </>
    )
}

export default Main
