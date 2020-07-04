import React, { Component } from 'react'
import ChildComp from './ChildComp.js'
class ParentComp extends Component {

    constructor(props){
        super()
        this.state = {
            parentName : 'parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        alert(`Greeetings to ${this.state.parentName} from ${childName}`)
    }
    render() {
        return (
            <div>
                <ChildComp greetHandler = {this.greetParent} />
            </div>
        )
    }
}

export default ParentComp;
