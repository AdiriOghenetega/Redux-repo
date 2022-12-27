import { FETCH_REQUEST,FETCH_DATA,FETCH_ERROR} from "./fetchusetypes"

const initialState = {
    loading : false,
    data : [], 
    error : ""
}

const fetchReducer = (state = initialState,action) =>{
    switch(action.type){
        case FETCH_REQUEST : return {
            ...state,
            loading : true
        }
        case FETCH_DATA : return{
            ...state,
            loading : false,
            data : action.payload
        }
        case FETCH_ERROR : return {
            loading : false,
            data : [], 
            error : action.payload
        }
        default : return state
    }
}

export default fetchReducer