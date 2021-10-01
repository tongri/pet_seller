import { Suspense, lazy } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import PrivateRoute from 'routes/PrivateRoute'
import PublicRoute from 'routes/PublicRoute'

import Modal from 'components/Layout/Modal'

const Authentication = lazy(() => import('pages/Authentication'))
const Main = lazy(() => import('pages/Main'))
const AdMore = lazy(() => import('pages/AdMore'))
const Liked = lazy(() => import('pages/Liked'))

const App = () => {
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
