import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadPets } from '_redux/actions/pets.action'

import Header from 'components/Layout/Header'
import AdList from 'components/Ads/AdList'
import Filter from 'components/Filter/Filter'

const Main = () => {
    const { list, isLoading } = useSelector((state) => state.pets)
    const token = useSelector((state) => state.users.token)
    const dsp = useDispatch()

    useEffect(() => dsp(loadPets()), [token, dsp])

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
