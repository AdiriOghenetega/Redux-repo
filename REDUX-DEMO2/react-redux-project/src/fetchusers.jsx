import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {fetchUser} from "./reduxstore"

function Fetchusers() {

    const userData = useSelector(state=>state.fetcher.data)
    const myDispatch = useDispatch()


  return (
    <div>
        <h1>users</h1>
        <div>{userData.map((item,index)=>{
            return <p key={index}>{item}</p>
        })}</div>
        <button onClick={()=>myDispatch(fetchUser())}>fetch users</button>
    </div>
  )
}

export default Fetchusers