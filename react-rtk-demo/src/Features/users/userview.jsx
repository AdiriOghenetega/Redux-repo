import React,{useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import {fetchUsers} from "../users/userslice"

function Userview() {
    const list = useSelector((state)=>state.user)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
    const display = ()=>{
        if(list.loading){
            return "loading"
        }else if(list.data.length > 0){
            return list.data.map(item=><p>{item}</p>)
        }else if(list.data.length <= 0 && list.error){
            return <p>oops, there was an error , reload page</p>
        }
    }
  return (
    <div>
    <h1>List of questions</h1>
    <div>{display()}</div>
    </div>
  )
}

export default Userview