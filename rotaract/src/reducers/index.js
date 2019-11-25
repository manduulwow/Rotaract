import signInsignOutReducer from './isLogged'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    isLogged: signInsignOutReducer
})

export default allReducers