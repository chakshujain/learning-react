import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: "",
             topic: ""
        }
    }   
    handleUsernameChange = (event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handleTopicChange = (event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit = (event)=>{
        alert(`${this.state.username}  ${this.state.topic}`)
        event.preventDefault();
    }
    render() {
        const {username,topic} = this.state;
        return (
            <form onSubmit = {this.handleSubmit}>
            <div>
                <label htmlFor="">Username</label>
                <input type="text" value = {username} onChange = {this.handleUsernameChange}/>
            </div>
            <div>
                <label htmlFor="">Topic</label>
                <select value = {topic} onChange = {this.handleTopicChange}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">vue</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
        )
    }
}

export default Form
