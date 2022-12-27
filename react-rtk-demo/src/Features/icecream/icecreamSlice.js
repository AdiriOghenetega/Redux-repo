import {createSlice} from '@reduxjs/toolkit'
import { buyCake,restockCake } from '../cake/cakeSlice'

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
    builder.addCase(buyCake,(state)=>{
        state.numberOficecream--
    }),
    builder.addCase(restockCake,(state,action)=>{
        state.numberOficecream += action.payload
    })
   }
})


export default iceCreamSlice.reducer
export const {buyIcecream,restockIcecream} = iceCreamSlice.actions