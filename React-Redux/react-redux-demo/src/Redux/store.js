import {createStore,applyMiddleware} from 'redux'
import cakeReducer from './Cake/cakeReducer'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(cakeReducer,composeWithDevTools(applyMiddleware(logger)))

export default store;