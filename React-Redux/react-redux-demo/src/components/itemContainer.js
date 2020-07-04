import React, { Component } from 'react'
import {connect} from 'react-redux'
class itemContainer extends Component {
    render() {
        return (
            <div>
                <h2>Item - {this.props.item}</h2>
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
    const itemState = ownProps.cake? state.noOfCakes:"NO Cakes";
    return {
        item: itemState
    }
}

export default connect(mapStateToProps)(itemContainer)
