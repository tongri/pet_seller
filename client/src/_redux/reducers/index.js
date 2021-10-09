import { combineReducers } from 'redux'

import UsersReducer from './users.reducer'
import PetsReducer from './pets.reducer'
import ErrorsReducer from './errors.reducer'
import UsersAdsReducer from './usersAds.reducer'

export default combineReducers({
    users: UsersReducer,
    pets: PetsReducer,
    errors: ErrorsReducer,
    usersAds: UsersAdsReducer,
})
