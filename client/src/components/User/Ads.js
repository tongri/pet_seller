import { useState } from 'react'

import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
} from 'mdb-react-ui-kit'

import AdsActive from './AdsActive'
import AdsInActive from './AdsInActive'

const Ads = () => {
    const [tabActive, setTabActive] = useState('tab1')

    const handleTabClick = (value) => {
        if (tabActive === value) return
        setTabActive(value)
    }

    return (
        <div className="container">
            <MDBTabs className="mb-3 px-4">
                <MDBTabsItem>
                    <MDBTabsLink
                        onClick={() => handleTabClick('tab1')}
                        active={tabActive === 'tab1'}
                        style={{ background: 'transparent' }}
                    >
                        Active
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink
                        onClick={() => handleTabClick('tab2')}
                        active={tabActive === 'tab2'}
                        style={{ background: 'transparent' }}
                    >
                        Inactive
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
                <MDBTabsPane show={tabActive === 'tab1'}>
                    <AdsActive />
                </MDBTabsPane>
                <MDBTabsPane show={tabActive === 'tab2'}>
                    <AdsInActive />
                </MDBTabsPane>
            </MDBTabsContent>
        </div>
    )
}

export default Ads
