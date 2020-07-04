import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";
import Header from "./components/Layouts/Header";
import NotesList from "./components/NotesList";
import AddNote from "./components/AddNote";
import { BrowserRouter as Router, Route } from "react-router-dom";
class App extends Component {
  state = {
    notes: [],
  };

  markComplete = (id) => {
    this.setState({
      notes: this.state.notes.map((note) => {
        if (note.id === id) {
          note.completed = !note.completed;
        }
        return note;
      }),
    });
  };
  delNote = (id) => {
    this.setState({
      notes: [...this.state.notes.filter((note) => note.id !== id)],
    });
  };

  addNote = (title) => {
    const newNote = {
      id: uuid(),
      title: title,
      completed: false,
    };
    this.setState({
      notes: [...this.state.notes, newNote],
    });
  };

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <AddNote addNote={this.addNote} />
                <NotesList
                  notes={this.state.notes}
                  markComplete={this.markComplete}
                  delNote={this.delNote}
                />
              </React.Fragment>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
