const createSlice = require('@reduxjs/toolkit').createSlice
const cakeActions = require('../cake/cakeSlice').cakeActions

const initialState = {
    numberOficecream : 20
}

const iceCreamSlice = createSlice({
    name: "icecream",
   initialState,
   reducers : {
    buyIcecream : (state)=>{
        state.numberOficecream--
    },
    restockIcecream : (state,action)=>{
        state.numberOficecream += action.payload
    }
   },
   extraReducers: (builder)=>{
    builder.addCase(cakeActions.buyCake,(state)=>{
        state.numberOficecream--
    }),
    builder.addCase(cakeActions.restockCake,(state,action)=>{
        state.numberOficecream += action.payload
    })
   }
})


module.exports= iceCreamSlice.reducer
module.exports.icecreamActions = iceCreamSlice.actions