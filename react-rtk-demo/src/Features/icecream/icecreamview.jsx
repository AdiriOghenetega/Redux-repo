import React,{useState} from 'react'
import {useSelector,useDispatch} from "react-redux"
import {buyIcecream,restockIcecream} from "../icecream/icecreamSlice"

function IcecreamView() {
    const [value,setValue]=useState(1)//if a state is not needed outside a component,it can stay as local state, don't unnecessarily complicate the redux store
    const numberOficecream = useSelector((state)=>state.icecream.numberOficecream)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>number of ice-cream - {numberOficecream}</h1>
        <button onClick={()=>dispatch(buyIcecream())}>buy ice-cream</button>
        <label htmlFor='retock'>Restock</label>
        <input id="restock" value={value} onChange={(e)=> setValue(parseInt(e.target.value))} placeholder="amount to restock"/>
        <button onClick={()=>dispatch(restockIcecream(value))}>restock ice-cream</button>
    </div>
  )
}

export default IcecreamView