import { useState } from 'react'
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
} from 'mdb-react-ui-kit'

import Header from 'components/Layout/Header'
import Ads from 'components/User/Ads'
import Settings from 'components/User/Settings'

const Profile = () => {
    const [tabActive, setTabActive] = useState('tab2')

    const handleTabClick = (value) => {
        if (value === tabActive) return
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
                        My ads
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink
                        onClick={() => handleTabClick('tab2')}
                        active={tabActive === 'tab2'}
                        style={{ background: 'transparent' }}
                    >
                        Settings
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
                <MDBTabsPane show={tabActive === 'tab1'}>
                    <Ads />
                </MDBTabsPane>
                <MDBTabsPane show={tabActive === 'tab2'}>
                    <Settings />
                </MDBTabsPane>
            </MDBTabsContent>
        </>
    )
}

export default Profile
