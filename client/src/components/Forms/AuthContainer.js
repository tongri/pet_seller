import { lazy } from 'react'

const SignInForm = lazy(() => import('./SignInForm'))
const SignUpForm = lazy(() => import('./SignUpForm'))

const AuthContainer = () => {
    return (
        <div
            className="row justify-content-center align-items-center"
            style={{ height: '90vh' }}
        >
            <div className="card col-md-4 col-sm-6">
                <div className="card-body">
                    <ul
                        className="nav nav-tabs nav-fill mb-3 d-flex"
                        id="ex1"
                        role="tablist"
                    >
                        <li className="nav-item" role="presentation">
                            <a
                                className="nav-link active"
                                id="ex1-tab-1"
                                data-mdb-toggle="tab"
                                href="#ex1-tabs-1"
                                role="tab"
                                aria-controls="ex1-tabs-1"
                                aria-selected="true"
                            >
                                Sign in
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a
                                className="nav-link"
                                id="ex1-tab-2"
                                data-mdb-toggle="tab"
                                href="#ex1-tabs-2"
                                role="tab"
                                aria-controls="ex1-tabs-2"
                                aria-selected="false"
                            >
                                Sign up
                            </a>
                        </li>
                    </ul>

                    <div className="tab-content" id="ex1-content">
                        <div
                            className="tab-pane fade show active"
                            id="ex1-tabs-1"
                            role="tabpanel"
                            aria-labelledby="ex1-tab-1"
                        >
                            <SignInForm />
                        </div>

                        <div
                            className="tab-pane fade show"
                            id="ex1-tabs-2"
                            role="tabpanel"
                            aria-labelledby="ex1-tab-2"
                        >
                            <SignUpForm />
                        </div>
                    </div>

                    <div className="extra-options">
                        <div className="d-flex align-items-center mt-3">
                            <div className="divider me-3"></div>
                            Or
                            <div className="divider ms-3"></div>
                        </div>
                        <div className="d-flex flex-column mt-3 gap-2">
                            <button className="btn btn-outline-dark flex-fill align-items-center d-flex justify-content-center gap-1">
                                <i className="fab fa-facebook-f fa-2x text-primary"></i>
                                Continue with Facebook
                            </button>
                            <button className="btn btn-outline-dark flex-fill align-items-center d-flex justify-content-center gap-1">
                                <i className="fab fa-google fa-2x text-success"></i>
                                Continue with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthContainer
