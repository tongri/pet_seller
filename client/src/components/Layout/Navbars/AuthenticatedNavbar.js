import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '_redux/actions/users.action'
import Heart from 'components/Icons/Heart'

const AuthenticatedNavbar = () => {
    const dsp = useDispatch()

    const logoutHandler = () => dsp(logoutUser())

    return (
        <ul className="navbar-nav d-flex align-items-center gap-2">
            <li className="nav-item active">
                <Link
                    to="/users/saved/"
                    className="nav-link"
                    aria-current="page"
                >
                    <Heart className="fa-lg nav-link p-0" />
                </Link>
            </li>
            <li className="nav-item dropdown">
                <i
                    className="far fa-user fa-lg nav-link dropdown-toggle"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                    id="dropdownNavbarToggler"
                ></i>
                <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownNavbarToggler"
                >
                    <li>
                        <a href="/" className="dropdown-item">
                            My Ads
                        </a>
                    </li>
                    <li>
                        <a href="/" className="dropdown-item">
                            Settings
                        </a>
                    </li>
                    <li>
                        <hr className="dropdown-divider m-0" />
                    </li>
                    <li>
                        <button
                            className="dropdown-item"
                            onClick={logoutHandler}
                        >
                            Log out
                        </button>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <Link to="/ad/create/" className="btn btn-warning">
                    Create ad
                </Link>
            </li>
        </ul>
    )
}

export default AuthenticatedNavbar
