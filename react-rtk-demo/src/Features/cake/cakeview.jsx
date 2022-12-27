import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {buyCake,restockCake} from "../cake/cakeSlice"

function CakeView() {
const numberOfCakes = useSelector((state)=>state.cake.numberOfCakes)
const dispatch = useDispatch()
  return (
    <div>
         <h1>number of cake - {numberOfCakes}</h1>
        <button onClick={()=>dispatch(buyCake())}>buy cake</button>
        <button onClick={()=>dispatch(restockCake(1))}>restock cake</button>
    </div>
  )
}

export default CakeView