import React, { Component } from 'react'

class Note extends Component {
    getStyle = ()=>{
        return {
            border: '1px',
            padding : '10px',
            background:'grey',
            textDecoration:this.props.note.completed ? 'line-through':'none'
        }
    }
    render() {
        const {title,id} = this.props.note
        return (
            <div style = {this.getStyle()}>
            <p>
                <input type="checkbox" onChange = {this.props.markComplete.bind(this,id)}/>{' '}
                {title}
                <button onClick = {this.props.delNote.bind(this,id)}>Delete</button>
            </p>
            </div>
        )
    }
}

export default Note
