const redux = require("redux")
//reduxlogger is a third party feature that logs all activity that takes place from action to reducer to dispatch
const reduxLogger = require("redux-logger")

const createStore = redux.createStore
const combineReducers = redux.combineReducers
//middleware is a feature of redux that lets it integrate with third party features
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

//type which is always a string constant
const myAction = "buy cake"
//an action creator,returns an action
function createAction(){
    //an action , always an object containg "type" key:value pair ,others key:value pairs can be added by choice
    return {
        type: myAction,
        info: "my first redux action"
    }
}
//state always an object
const originalState= {
    numberOfCakes : 10
}
//reducer
const reducer = (state = originalState,action) => {
    switch(action.type){
        case myAction : return {
            numberOfCakes : state.numberOfCakes -2
        }
        default : return state
    }
}
const secondAction = "buy ice-cream"

function createSecondAction(){
    return { 
        type: secondAction
    }
}

const secondInitialState = {
    numberOfIcecream : 20
}

const secondReducer = (state = secondInitialState , action) =>{
switch(action.type){
    case secondAction : return {
        numberOfIcecream : state.numberOfIcecream -1
    }
    default : return state
}
}

const rootReducer = combineReducers({
    cake : reducer,
    icecream : secondReducer
})

const store = createStore(rootReducer,applyMiddleware(logger))
console.log("initial state",store.getState())
store.subscribe(()=>{})
store.dispatch(createAction())
store.dispatch(createAction())
store.dispatch(createAction())
store.dispatch(createSecondAction())
store.dispatch(createSecondAction())
store.dispatch(createSecondAction())
store.dispatch(createSecondAction())
const Unsubscribe = store.subscribe(()=> console.log("updated state",store.getState()))
Unsubscribe()