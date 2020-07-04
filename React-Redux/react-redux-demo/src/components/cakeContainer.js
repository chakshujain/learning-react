import React, { Component } from 'react'
import { buyCake } from '../Redux/Cake/cakeActions'

import {connect} from 'react-redux'
class cakeContainer extends Component {
    render() {
        return (
            <div>
                <h1>No of cakes - {this.props.noOfCakes}</h1>
                <button onClick = {this.props.buyCake}>Buy Cake</button>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        noOfCakes :state.noOfCakes
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyCake: ()=> dispatch(buyCake())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(cakeContainer)
