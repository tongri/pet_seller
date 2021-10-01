import { Suspense, lazy } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Modal from 'components/Layout/Modal'

const Authentication = lazy(() => import('pages/Authentication'))
const Main = lazy(() => import('pages/Main'))
const AdMore = lazy(() => import('pages/AdMore'))

const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<p>Loading...</p>}>
                <Switch>
                    <Route path="/" exact>
                        <Main />
                    </Route>
                    <Route path="/login">
                        <Authentication />
                    </Route>
                    <Route path="/ad/:id/">
                        <AdMore />
                    </Route>
                </Switch>
            </Suspense>
            <Modal />
        </BrowserRouter>
    )
}

export default App
