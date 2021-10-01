import Heart from 'components/Icons/Heart'

const AuthenticatedNavbar = () => {
    return (
        <ul className="navbar-nav d-flex align-items-center gap-2">
            <li className="nav-item active">
                <a
                    className="nav-link"
                    aria-current="page"
                    href="#navbarExample01"
                >
                    <Heart className="fa-lg" />
                </a>
            </li>
            <li className="nav-item dropdown">
                <i
                    class="far fa-user fa-lg nav-link dropdown-toggle"
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
                        <hr className="dropdown-divider" />
                    </li>
                    <li>
                        <a href="/" className="dropdown-item">
                            Log out
                        </a>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <button className="btn btn-warning">Create ad</button>
            </li>
        </ul>
    )
}

export default AuthenticatedNavbar
