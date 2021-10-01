// import useFetch from 'hooks/useFetch'
import { useSelector } from 'react-redux'

import Header from 'components/Layout/Header'
import Watchlist from 'components/User/Watchlist'

const Liked = () => {
    // const { data, isLoading, isError } = useFetch('/api/v1/users/favourite/')[0]

    const pets = useSelector((state) => state.pets.list)

    return (
        <>
            <Header />

            <div className="navbar navbar-light bg-light p-0 m-0 g-0">
                <div className="container">
                    <ul className="nav nav-tabs" id="ex1" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a
                                href="#ex1-tabs-1"
                                className="nav-link active"
                                data-mdb-toggle="tab"
                                role="tab"
                                aria-controls="ex1-tabs-1"
                                aria-selected="true"
                            >
                                Watchlist
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a
                                href="#ex1-tabs-2"
                                className="nav-link"
                                data-mdb-toggle="tab"
                                role="tab"
                                aria-controls="ex1-tabs-2"
                                aria-selected="true"
                            >
                                Recently viewed
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="tab-content" id="ex1-content">
                <div
                    className="tab-pane fade show active"
                    id="ex1-tabs-1"
                    role="tabpanel"
                    aria-labelledby="ex1-tab-1"
                >
                    {/* {isLoading ? (
                        <p>Loading...</p>
                    ) : isError ? (
                        <p>Error occured...</p>
                    ) : (
                        <Watchlist list={data} />
                    )} */}
                    <Watchlist list={pets} />
                </div>
                <div
                    className="tab-pane fade show"
                    id="ex1-tabs-2"
                    role="tabpanel"
                    aria-labelledby="ex1-tab-2"
                >
                    Tab 2 content
                </div>
            </div>
        </>
    )
}

export default Liked
