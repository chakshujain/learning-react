import React from 'react';
import { Provider } from 'react-redux'
import store from './Redux/store'
import './App.css';
import CakeContainer from './components/cakeContainer'
import ItemContainer from './components/itemContainer'

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
    <ItemContainer />
    <ItemContainer cake />
     <CakeContainer />
    </div>
    </Provider>
  );
}

export default App;
