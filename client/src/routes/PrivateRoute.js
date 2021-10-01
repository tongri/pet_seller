import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ children, ...rest }) => {
    const isAuthenticated = useSelector((state) => state.users.isAuthenticated)
    return isAuthenticated ? (
        <Route {...rest}>{children}</Route>
    ) : (
        <Redirect to="/login/" />
    )
}

export default PrivateRoute
