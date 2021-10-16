import { useState, lazy } from 'react'
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
} from 'mdb-react-ui-kit'

import GoogleAuth from './GoogleAuth'

const SignInForm = lazy(() => import('./SignInForm'))
const SignUpForm = lazy(() => import('./SignUpForm'))

const AuthContainer = () => {
    const [activeTab, setActiveTab] = useState('tab1')

    const handleActiveTab = (val) => {
        if (activeTab === val) return
        setActiveTab(val)
    }

    return (
        <div
            className="row justify-content-center align-items-center"
            style={{ height: '90vh' }}
        >
            <div className="card col-md-4 col-sm-6">
                <div className="card-body">
                    <MDBTabs className="mb-3" fill>
                        <MDBTabsItem>
                            <MDBTabsLink
                                active={activeTab === 'tab1'}
                                onClick={() => handleActiveTab('tab1')}
                            >
                                Log in
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink
                                active={activeTab === 'tab2'}
                                onClick={() => handleActiveTab('tab2')}
                            >
                                Sign up
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>
                    <MDBTabsContent>
                        <MDBTabsPane show={activeTab === 'tab1'}>
                            <SignInForm />
                        </MDBTabsPane>
                        <MDBTabsPane show={activeTab === 'tab2'}>
                            <SignUpForm />
                        </MDBTabsPane>
                    </MDBTabsContent>

                    <div className="extra-options">
                        <div className="d-flex align-items-center mt-3">
                            <div className="divider me-3"></div>
                            Or
                            <div className="divider ms-3"></div>
                        </div>
                        <div className="d-flex flex-column mt-3 gap-2">
                            <GoogleAuth />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthContainer
