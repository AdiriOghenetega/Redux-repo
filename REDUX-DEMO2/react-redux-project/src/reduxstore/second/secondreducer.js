import { secondAction } from "./seconactiontype";
const initialState={
    numberOfIceCreams : 20
}
const secondReducer = (state= initialState,action)=>{
    switch(action.type){
        case secondAction : return {
            ...state,
            numberOfIceCreams : state.numberOfIceCreams - 2
        }
        default : return state
    }
}

export default secondReducer