import React from 'react'
import {action} from "./reduxstore"
import {useSelector , useDispatch} from "react-redux"


function Cakecontainerwithhooks() {
    const cakesInStore = useSelector(state=>state.cake.numberOfCakes);
    const myDispatch = useDispatch()
    console.log(action)
  return (
    <div>
        <h1>Number of cakes - {cakesInStore}</h1>
        <button onClick={()=>myDispatch(action())}>buy cake</button>
    </div>
  )
}

export default Cakecontainerwithhooks