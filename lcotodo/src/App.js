import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/hello.js'
import HelloClassComp from './components/hello-class.js'
import Subscribe from './components/subscribe.js'
import Counter from './components/counter.js'
import ParentComp from './components/ParentComp.js'
import ListRender from './components/ListRender.js'
import Form from './components/Form.js'
function App() {
  return (

    <div className="App">
      <Form />
      {/* <ListRender /> */}
      {/* <ParentComp /> */}
      
      {/* <Hello name = "CK">
        <button>
          MyButton
        </button>
      </Hello>
      <HelloClassComp name = "Divesh"/> */}
      {/* <Subscribe></Subscribe>
      <Counter/> */}
      
    </div>
  );
}

export default App;
