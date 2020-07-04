import React, { Component } from 'react'
import Note from './Note'
class NotesList extends Component {
    render() {
        return (
            <p>
                {this.props.notes.map((note)=>(
                    <Note note = {note} markComplete = {this.props.markComplete} delNote = {this.props.delNote}/>
                ))}
            </p>
        )
    }
}

export default NotesList
