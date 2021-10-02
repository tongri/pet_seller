import { Link } from 'react-router-dom'

const AuthHeader = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid justify-content-center">
                    <Link to="/">
                        <h3 className="text-warning header-title">Pet Home</h3>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default AuthHeader
