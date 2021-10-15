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
    const [tabActive, setTabActive] = useState('tab1')

    const handleTabClick = (value) => {
        if (tabActive === value) return
        setTabActive(value)
    }

    return (
        <>
            <Header />

            <MDBTabs className="mb-3 px-4 bg-white">
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

            <MDBTabsContent>
                <MDBTabsPane show={tabActive === 'tab1'}>
                    <Watchlist />
                </MDBTabsPane>
                <MDBTabsPane show={tabActive === 'tab2'}>
                    <RecentlyViewed />
                </MDBTabsPane>
            </MDBTabsContent>
        </>
    )
}

export default Liked
