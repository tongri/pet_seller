const Header = () => {
    return (
        <header className="mb-4">
            <nav className="navbar navbar-expand-lg navbar-light bg-white px-4">
                <div className="container-fluid d-flex justify-content-space-between align-items-center">
                    <h3 className="text-warning header-title flex-fill">
                        Pet Seller
                    </h3>
                    <div
                        className="collapse navbar-collapse flex-fill justify-content-end"
                        id="navbarExample01"
                    >
                        <ul className="navbar-nav d-flex align-items-center gap-2">
                            <li className="nav-item active">
                                <a
                                    className="nav-link"
                                    aria-current="page"
                                    href="#navbarExample01"
                                >
                                    <i className="far fa-heart fa-lg"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-warning">
                                    Sign in
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
