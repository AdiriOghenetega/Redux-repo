const store = require('./app/store')
const cakeActions = require('./Features/cake/cakeSlice').cakeActions
const icecreamActions = require('./Features/icecream/icecreamSlice').icecreamActions
const fetchUsers = require('./Features/users/userslice').fetchUsers

console.log("initialState",store.getState())

const unsubscribe = store.subscribe(()=>{console.log("updated state",store.getState())})

store.dispatch(fetchUsers())

// store.dispatch(cakeActions.buyCake())
// store.dispatch(cakeActions.buyCake())
// store.dispatch(cakeActions.buyCake())
// store.dispatch(cakeActions.restockCake(3))

// store.dispatch(icecreamActions.buyIcecream())
// store.dispatch(icecreamActions.buyIcecream())
// store.dispatch(icecreamActions.buyIcecream())
// store.dispatch(icecreamActions.restockIcecream(3))

// unsubscribe()