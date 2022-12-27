import React from 'react'
import {useState} from "react"
import {useSelector,useDispatch} from "react-redux"
import {action} from "./reduxstore"

function Newcakecontainer() {
    const [number,setNumber] = useState(1)
    const cakes = useSelector(state=>state.cake.numberOfCakes)
    const myDispatch = useDispatch()
  return (
    <div>
        <h1>number of cakes - {cakes} </h1>
        <input type="text" onChange={(e)=>setNumber(e.target.value)} /><button onClick={()=>myDispatch(action(number))}>buy {number} cake</button>
    </div>
  )
}

export default Newcakecontainer