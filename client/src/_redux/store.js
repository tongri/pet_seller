import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import Reducer from './reducers'

const middleware = [thunk]

const composeEnhancer = process.env.NODE_ENV === 'development' ?
    composeWithDevTools(applyMiddleware(...middleware)) :
        applyMiddleware(...middleware)

const store = createStore(Reducer, composeEnhancer)
export default store