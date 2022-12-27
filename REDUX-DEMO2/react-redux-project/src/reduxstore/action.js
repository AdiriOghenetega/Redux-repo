import {buyCake} from "./actiontype"

export const action = (number=1) => {
   return {
    type: buyCake,
    payload : number
   }
}

