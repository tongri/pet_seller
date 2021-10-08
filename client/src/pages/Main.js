import { useSelector } from 'react-redux'

import Header from 'components/Layout/Header'
import AdList from 'components/Ads/AdList'
import Filter from 'components/Filter/Filter'
import Scroller from 'components/Layout/Scroller'
import useFetch from 'hooks/useFetch'

const Main = () => {
    const { list, ...filters } = useSelector((state) => state.pets)
    const { data, isLoading } = useFetch('/api/v1/pets/')[0]

    return (
        <>
            <Header />

            <div className="container-fluid row justify-content-center gap-5 mt-5">
                <div className="col-md-2">
                    <Filter filters={filters} />
                </div>
                <div className="col-md-6">
                    {isLoading ? (
                        <p className="text-center">Loading...</p>
                    ) : (
                        <AdList list={data} />
                    )}
                </div>
            </div>

            <Scroller />
        </>
    )
}

export default Main
