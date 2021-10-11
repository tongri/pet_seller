import { Link } from 'react-router-dom'

import { PAGE_MAIN } from 'consts/routes'

const AuthHeader = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid justify-content-center">
                    <Link to={PAGE_MAIN}>
                        <h3 className="text-warning header-title">Pet Home</h3>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default AuthHeader
