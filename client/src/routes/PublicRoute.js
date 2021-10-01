// Route only for not authenticated
// Forbids visiting pages like login and registration for authenticated users
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PublicRoute = ({ children, ...rest }) => {
    const isAuthenticated = useSelector((state) => state.users.isAuthenticated)
    return isAuthenticated ? (
        <Redirect to="/" />
    ) : (
        <Route {...rest}>{children}</Route>
    )
}

export default PublicRoute
