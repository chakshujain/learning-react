import React from 'react'
// import ParentComp from './components/ParentComp.js'
function ChildComp(props) {
    return (
        <div>
            <button onClick = {()=> props.greetHandler('child')}>Click me </button>
        </div>
    )
}

export default ChildComp;
