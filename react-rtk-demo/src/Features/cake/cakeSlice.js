import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    numberOfCakes : 10
}

const cakeSlice = createSlice({
    name : "cake",
    initialState,
    reducers : {
        buyCake : (state)=>{
            state.numberOfCakes--
        },
        restockCake: (state, action)=>{
            state.numberOfCakes += action.payload
        }
    }
})

export default cakeSlice.reducer//cakeSlice.reducer instead of cakeSlice.reducers . i think its because we would be accessing each individual reducer
export const {buyCake,restockCake} = cakeSlice.actions