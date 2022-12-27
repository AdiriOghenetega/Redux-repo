import React from 'react'
import {buyIceCream} from './reduxstore'
import {connect} from "react-redux"

function IcecreamContainer(props) {
  return (
    <div>
        <h1>number of ice-cream - {props.numberOfIceCreams} </h1>
        <button onClick={props.dispatch}>buy ice-cream</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numberOfIceCreams : state.icecream.numberOfIceCreams
    }
}

const mapDispatchToProps = dispatch =>{
   return {dispatch : ()=>{ 
        dispatch(buyIceCream())
    }}
}

export default connect(mapStateToProps,mapDispatchToProps)(IcecreamContainer)