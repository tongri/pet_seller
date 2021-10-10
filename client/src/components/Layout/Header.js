import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBCollapse,
} from 'mdb-react-ui-kit'

import AuthenticatedNavbar from './Navbars/AuthenticatedNavbar'
import NotAuthenticatedNavbar from './Navbars/NotAuthenticatedNavbar'

const Header = () => {
    const isAuthenticated = useSelector((state) => state.users.isAuthenticated)
    const [showNavText, setShowNavText] = useState(false)

    return (
        <MDBNavbar expand="lg" light bgColor="light" className="px-4">
            <MDBContainer fluid className="d-flex align-items-center">
                <MDBNavbarBrand
                    tag="span"
                    className="header-title text-warning"
                >
                    <Link to="/" className="text-warning h3 mb-0">
                        Pet Home
                    </Link>
                </MDBNavbarBrand>
                <MDBNavbarToggler
                    type="button"
                    data-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => setShowNavText(!showNavText)}
                >
                    <MDBIcon icon="bars" fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar show={showNavText}>
                    <MDBNavbarNav className="d-flex justify-content-end">
                        {isAuthenticated ? (
                            <AuthenticatedNavbar />
                        ) : (
                            <NotAuthenticatedNavbar />
                        )}
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    )
}

export default Header
