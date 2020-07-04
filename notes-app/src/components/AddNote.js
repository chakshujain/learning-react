import React, { Component } from "react";
import {Container} from 'react-bootstrap'
export class AddNote extends Component {
    state = {
        title: ''
    }

    onChangeHandler = (event)=>{
        this.setState({
            title : event.target.value
        })
    }
  render() {
    return (
      <Container>
        <p>
          <input onChange = {this.onChangeHandler} type="text" />
          <button onClick = {this.props.addNote.bind(this,this.state.title)}>Add Note</button>
        </p>
      </Container>
    );
  }
}

export default AddNote;
