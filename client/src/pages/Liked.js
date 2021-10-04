// import useFetch from 'hooks/useFetch'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
} from 'mdb-react-ui-kit'

import Header from 'components/Layout/Header'
import Watchlist from 'components/User/Watchlist'
import RecentlyViewed from 'components/User/RecentlyViewed'

const Liked = () => {
    // const { data, isLoading, isError } = useFetch('/api/v1/users/favourite/')[0]

    const pets = useSelector((state) => state.pets.list)
    const [tabActive, setTabActive] = useState('tab1')
    const handleTabClick = (value) => {
        if (tabActive === value) return
        setTabActive(value)
    }

    return (
        <>
            <Header />

            <div className="navbar navbar-light bg-light p-0 m-0 g-0">
                <div className="container">
                    <MDBTabs>
                        <MDBTabsItem>
                            <MDBTabsLink
                                onClick={() => handleTabClick('tab1')}
                                active={tabActive === 'tab1'}
                                style={{ background: 'transparent' }}
                            >
                                Whatchlist
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink
                                onClick={() => handleTabClick('tab2')}
                                active={tabActive === 'tab2'}
                                style={{ background: 'transparent' }}
                            >
                                Recently viewed
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>
                </div>
            </div>

            <MDBTabsContent>
                <MDBTabsPane show={tabActive === 'tab1'}>
                    <Watchlist list={pets} />
                </MDBTabsPane>
                <MDBTabsPane show={tabActive === 'tab2'}>
                    <RecentlyViewed />
                </MDBTabsPane>
            </MDBTabsContent>
        </>
    )
}

export default Liked
