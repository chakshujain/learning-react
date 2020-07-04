const redux = require('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware  = redux.applyMiddleware
const logger = reduxLogger.createLogger()


// Actions
const BUY_CAKE = 'BUY_CAKE'
const ICE_CREAM = 'ICE_CREAM'

// Action Creators
function buyCake(){
    return {
        type: BUY_CAKE
    }
}
function buyIcecream(){
    return {
        type: ICE_CREAM
    }
}

initialCakeState = {
    noOfCakes:10
}
initialIcecreamState = {
    noOfIcecream:20
}

// Reducers
cakeReducer = (state = initialCakeState,action) =>{
    switch(action.type){
        case BUY_CAKE : return {
            ...state,
            noOfCakes : state.noOfCakes-1
        }
        default : return state 
    }
}

iceCreamReducer = (state = initialIcecreamState,action) =>{
    switch(action.type){
        case ICE_CREAM : return {
            ...state,
            noOfIcecream : state.noOfIcecream-1
        } 
        default : return state 
    }
}

// Combining Reducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream : iceCreamReducer
})

// Store 
store = createStore(rootReducer,applyMiddleware(logger));

// Listener to the store
// const unsubscribe = store.subscribe(()=>{})

// Calling actions on store
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())

// unsubscribe()

