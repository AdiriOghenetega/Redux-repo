import { buyCake } from "./actiontype"

const initialState = {
    numberOfCakes : 10
}

const reducer =(state = initialState ,action)=>{
    switch(action.type){
        case buyCake : return {
             ...state,
             numberOfCakes : state.numberOfCakes - action.payload
        }
        default : return state
    }
}

export default reducer