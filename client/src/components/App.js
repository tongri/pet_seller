import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { verifyToken } from '_redux/actions/users.action'

import PrivateRoute from 'routes/PrivateRoute'
import PublicRoute from 'routes/PublicRoute'

import Modal from 'components/Layout/Modal'

const Authentication = lazy(() => import('pages/Authentication'))
const Main = lazy(() => import('pages/Main'))
const AdMore = lazy(() => import('pages/AdMore'))
const Liked = lazy(() => import('pages/Liked'))
const AdCreate = lazy(() => import('pages/AdCreate'))
const Profile = lazy(() => import('pages/Profile'))
const AdUpdate = lazy(() => import('pages/AdUpdate'))

const App = () => {
    const dsp = useDispatch()

    // eslint-disable-next-line
    useEffect(() => dsp(verifyToken()), [])

    return (
        <BrowserRouter>
            <Suspense fallback={<p>Loading...</p>}>
                <Switch>
                    <Route path="/" exact>
                        <Main />
                    </Route>
                    <PublicRoute path="/login">
                        <Authentication />
                    </PublicRoute>
                    <PrivateRoute path="/ad/create/">
                        <AdCreate />
                    </PrivateRoute>
                    <PrivateRoute path="/profile">
                        <Profile />
                    </PrivateRoute>
                    <PrivateRoute path="/ad/edit/:id/">
                        <AdUpdate />
                    </PrivateRoute>
                    <Route path="/ad/:id/">
                        <AdMore />
                    </Route>
                    <PrivateRoute path="/users/saved/">
                        <Liked />
                    </PrivateRoute>
                </Switch>
            </Suspense>
            <Modal />
        </BrowserRouter>
    )
}

export default App
