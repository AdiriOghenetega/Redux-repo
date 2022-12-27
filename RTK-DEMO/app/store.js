const configureStore = require('@reduxjs/toolkit').configureStore
// const reduxLogger = require('redux-logger')
const cakeReducer = require("../Features/cake/cakeSlice")
const icecreamReducer = require('../Features/icecream/icecreamSlice')
const userReducer = require('../Features/users/userslice')

// const logger = reduxLogger.createLogger()
// middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)

const store = configureStore({
    reducer:{
        cake : cakeReducer,
        icecream : icecreamReducer,
        user : userReducer
    },
})

module.exports = store