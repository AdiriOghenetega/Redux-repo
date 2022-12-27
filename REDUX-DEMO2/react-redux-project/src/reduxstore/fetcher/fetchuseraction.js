import { FETCH_REQUEST,FETCH_DATA,FETCH_ERROR } from "./fetchusetypes";
import axios from "axios"

export const fetchRequest =()=> {
   return {
    type : FETCH_REQUEST
   } 
}

export const fetchData =(users)=> {
    return {
        type : FETCH_DATA,
        payload : users
    }
    
}

export const fetchError =(error)=> {
    return {
        type : FETCH_ERROR,
        payload : error
    }
    
}

export const fetchUser = ()=>{
    return (dispatch)=>{
               dispatch(fetchRequest())
               axios.get("https://jsonplaceholder.typicode.com/users")
               .then(response =>{
                 dispatch(fetchData(response.data.map(item=>item.name)))
                })
               .catch(error => dispatch(fetchError(error)))
    }
}