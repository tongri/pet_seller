import { Link } from 'react-router-dom'
import { PAGE_LOGIN } from 'consts/routes'

const NotAuthenticatedNavbar = () => {
    return (
        <ul className="navbar-nav d-flex align-items-center gap-2">
            <li className="nav-item">
                <Link to={PAGE_LOGIN} className="btn btn-warning">
                    Sign in
                </Link>
            </li>
        </ul>
    )
}

export default NotAuthenticatedNavbar
