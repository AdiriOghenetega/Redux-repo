const redux = require("redux")
const reduxThunk = require("redux-thunk")
const axios = require("axios")

const thunk = reduxThunk.default
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

const initialState = {
    loading:true,
    users: [],
    error : ""
}

const startFetch = "start fetch"
function onStartFetch(){
    return { 
        type: startFetch
    }
}
const recievedResponse = "recieved ressponse"
function onRecievedResponse(users){
    return {
        type : recievedResponse,
        payload: users
    }
}
const recievedError = "recieved error"
function onRecievedError(error){
    return {
        type: recievedError,
        payload : error
    }
}

const reducer = (state = initialState ,action) => {
    switch(action.type){
        case startFetch : return {
            ...state,
            loading : true
        }
        case recievedResponse : return {
            ...state,
            loading : false,
            users : action.payload,
        }
        case recievedError : return {
            loading : false,
            users : "",
            error : action.payload
        }
        default : return state
    }
}
//the redux-thunk middleware gives this action creator the ability to return a function instead of just returning an action
const fetchDemo = ()=>{
    return function(dispatch){
        dispatch(onStartFetch())
         axios.get("https://jsonplaceholder.typicode.com/users")
         .then(response=>{
            const users = response.data.json()
             dispatch(onRecievedResponse(users))
            })
         .catch(error=> dispatch(onRecievedError(error.message)))
    }
}



const store = createStore(reducer,applyMiddleware(thunk))
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchDemo())