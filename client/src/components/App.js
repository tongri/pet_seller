import { Suspense, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { verifyToken } from '_redux/actions/users.action'

import PrivateRoute from 'routes/PrivateRoute'
import PublicRoute from 'routes/PublicRoute'

import Modal from 'components/Layout/Modal'
import Scroller from 'components/Layout/Scroller'

import { PRIVATE_ROUTES, PUBLIC_ROUTES, ROUTES } from 'consts/routes'

const App = () => {
    const dsp = useDispatch()

    // eslint-disable-next-line
    useEffect(() => dsp(verifyToken()), [])

    return (
        <BrowserRouter>
            <Suspense fallback={<p>Loading...</p>}>
                <Switch>
                    {PUBLIC_ROUTES.map(
                        ({ path, component: Component }, index) => (
                            <PublicRoute path={path} exact key={index}>
                                <Component />
                            </PublicRoute>
                        )
                    )}
                    {PRIVATE_ROUTES.map(
                        ({ path, component: Component }, index) => (
                            <PrivateRoute path={path} exact key={index}>
                                <Component />
                            </PrivateRoute>
                        )
                    )}
                    {ROUTES.map(({ path, component: Component }, index) => (
                        <Route path={path} exact key={index}>
                            <Component />
                        </Route>
                    ))}
                </Switch>
            </Suspense>

            <Scroller />
            <Modal />
        </BrowserRouter>
    )
}

export default App
