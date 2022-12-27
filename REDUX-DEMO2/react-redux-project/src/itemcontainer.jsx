import React from 'react'
import {connect} from "react-redux"
import {action,buyIceCream} from "./reduxstore"

function Itemcontainer(props) {
  return (
    <div>
    <h1>Item contains - {props.item}</h1>
     <button onClick={props.buyItem}>buy item</button>
     </div>
   
  )
}

const mapStateToProps = (state,ownProps) =>{
    const chosenItem = ownProps.cake ? state.cake.numberOfCakes : state.icecream.numberOfIceCreams

    return {
        item : chosenItem
    }
}

const mapDispatchToProps = (dispatch,ownProps)=>{
    const dispatchFunction = ownProps.cake ? ()=> dispatch(action()) : ()=> dispatch(buyIceCream())
    return {
        buyItem : dispatchFunction
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Itemcontainer)