import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ children, ...rest }) => {
    const { isAuthenticated, token } = useSelector((state) => state.users)
    return isAuthenticated ? (
        <Route {...rest}>{children}</Route>
    ) : token ? (
        <p>Loading...</p>
    ) : (
        <Redirect to="/login/" />
    )
}

export default PrivateRoute
