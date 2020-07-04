import React ,{Component} from 'react';

class HelloClassComp extends Component{
    render(){
        return(
            <div>
                <h1>Hello, I am class component {this.props.name}</h1>
            </div>
        )
    }
}

export default HelloClassComp;