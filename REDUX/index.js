const redux = require('redux')
const createStore = redux.createStore

// Actions
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

// Action Creaters
function buycake(){
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}

function buyIcecream(){
    return {
        type: BUY_ICECREAM,
    }
}


// State
const initialState = {
    noOfCakes:10,
    noOfIcecreams:20
}

// Reducer
const reducer = (state = initialState,action)=>{
    switch(action.type){
        case BUY_CAKE :
            return {
                ...state,
                noOfCakes: state.noOfCakes-1
            }
        case BUY_ICECREAM :
            return {
                ...state,
                noOfIcecreams: state.noOfIcecreams-1
                }
        default: return state;
    }
}
// Redux Store
const store = createStore(reducer)
console.log("Initial State",store.getState());

// Listener to the store
const unsubscribe = store.subscribe(()=>{console.log("Updated State",store.getState())})

// Calling actions on store
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe()