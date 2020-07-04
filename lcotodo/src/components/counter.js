import React , {Component} from 'react'

class Counter extends Component{
    constructor(props){
        super()
        this.state = {
            count:0
        }
    }
    increment(){
        this.setState({
            count : this.state.count + 1
        },()=>{
            console.log(this.state.count)
        })
    }
    incrementbyfive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render(){
        return(
            <div>
                {this.state.count}
                <br/>
                <button onClick = {()=>this.increment()}>Increment</button>
                <button onClick = {()=>this.incrementbyfive()}>Increment By Five</button>
            </div>
        );
    }   
}
export default Counter;