import {configureStore} from '@reduxjs/toolkit'
// import reduxLogger from 'redux-logger'
import cakeReducer from "../Features/cake/cakeSlice"
import icecreamReducer from '../Features/icecream/icecreamSlice'
import userReducer from '../Features/users/userslice'

// const logger = reduxLogger.createLogger()
// middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)

const store = configureStore({
    reducer:{
        cake : cakeReducer,
        icecream : icecreamReducer,
        user : userReducer
    },
})

export default store