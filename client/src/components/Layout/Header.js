import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import AuthenticatedNavbar from './Navbars/AuthenticatedNavbar'
import NotAuthenticatedNavbar from './Navbars/NotAuthenticatedNavbar'

const Header = () => {
    const isAuthenticated = useSelector((state) => state.users.isAuthenticated)

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-white px-4">
                <div className="container-fluid d-flex justify-content-space-between align-items-center">
                    <h3 className="header-title flex-fill">
                        <Link to="/" className="text-warning">
                            Pet Home
                        </Link>
                    </h3>
                    <div
                        className="collapse navbar-collapse flex-fill justify-content-end"
                        id="navbarExample01"
                    >
                        {isAuthenticated ? (
                            <AuthenticatedNavbar />
                        ) : (
                            <NotAuthenticatedNavbar />
                        )}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
