const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk
const axios = require('axios')

const initialState = {
    loading : false,
    data : [],
    error: ""
}

const fetchUsers = createAsyncThunk("user/fetchUsers",()=>{
     return axios
     .get("https://opentdb.com/api.php?amount=10")
    .then((response) => response.data.results.map(item=>item.question))
})

const userSlice = createSlice({
    name : "user",
    initialState,
    extraReducers : builder =>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
            state.error=""
        })
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.loading = false
            state.data = []
            state.error = action.error.message
        })
    }
})

module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers