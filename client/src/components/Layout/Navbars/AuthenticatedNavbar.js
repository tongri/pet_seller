import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { PAGE_SAVED, PAGE_PROFILE, PAGE_AD_CREATE } from 'consts/routes'

import {
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBDropdownDivider,
} from 'mdb-react-ui-kit'

import { logoutUser } from '_redux/actions/users.action'
import Heart from 'components/Icons/Heart'

const AuthenticatedNavbar = () => {
    const dsp = useDispatch()

    const logoutHandler = () => dsp(logoutUser())

    return (
        <ul className="navbar-nav d-flex align-items-center gap-2">
            <li className="nav-item active">
                <Link to={PAGE_SAVED} className="nav-link" aria-current="page">
                    <Heart className="fa-lg nav-link p-0" clickable={false} />
                </Link>
            </li>
            <li className="nav-item dropdown">
                <MDBDropdown>
                    <MDBDropdownToggle
                        tag="span"
                        className="text-muted me-2"
                        style={{ cursor: 'pointer' }}
                    >
                        <i className="far fa-user fa-lg"></i>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                        <MDBDropdownItem />
                        <MDBDropdownItem>
                            <Link to={PAGE_PROFILE} className="dropdown-item">
                                My Ads
                            </Link>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                            <Link to={PAGE_PROFILE} className="dropdown-item">
                                Settings
                            </Link>
                        </MDBDropdownItem>
                        <MDBDropdownDivider style={{ margin: '0px' }} />
                        <MDBDropdownItem>
                            <button
                                className="dropdown-item"
                                onClick={logoutHandler}
                            >
                                Log out
                            </button>
                        </MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
            </li>
            <li className="nav-item">
                <Link to={PAGE_AD_CREATE} className="btn btn-warning">
                    Create ad
                </Link>
            </li>
        </ul>
    )
}

export default AuthenticatedNavbar
