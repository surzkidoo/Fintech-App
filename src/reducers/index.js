import authReducer from './authReducer'
import loadingReducer from './loaderReducer'
import globalReducer from './globalReducer'
import { combineReducers } from 'redux'

const allReducer = combineReducers({
    auth:authReducer,
    loading:loadingReducer,
    app: globalReducer
})

export default allReducer