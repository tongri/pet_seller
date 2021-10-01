import { Link } from 'react-router-dom'

const NotAuthenticatedNavbar = () => {
    return (
        <ul className="navbar-nav d-flex align-items-center gap-2">
            <li className="nav-item">
                <Link to="/login/" className="btn btn-warning">
                    Sign in
                </Link>
            </li>
        </ul>
    )
}

export default NotAuthenticatedNavbar
