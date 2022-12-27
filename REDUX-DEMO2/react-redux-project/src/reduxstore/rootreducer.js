import reducer from "./reducer.js"
import secondReducer from "./second/secondreducer"
import fetchReducer from "./fetcher/fetchuserreducer.js"
import {combineReducers} from "redux"

 const rootReducer= combineReducers({
    cake : reducer,
    icecream : secondReducer,
    fetcher : fetchReducer
}) 




export default rootReducer