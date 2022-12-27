import React from 'react'
import {action} from "./reduxstore"
import { connect } from 'react-redux'

const Cakecontainer = (props) => {
  return (
    <div>
        <h2>Number of cakes - {props.numberOfCakes} </h2>
        <button onClick={props.buyCake}>buy cake</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes : state.cake.numberOfCakes
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    buyCake : ()=>{
      dispatch(action())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cakecontainer)