import { combineReducers } from 'redux'

import UsersReducer from './users.reducer'
import PetsReducer from './pets.reducer'

export default combineReducers({
    users: UsersReducer,
    pets: PetsReducer,
})
