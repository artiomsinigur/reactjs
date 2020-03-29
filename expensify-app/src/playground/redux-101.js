import { createStore } from 'redux' 

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count + incrementBy
            }
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return {
                count: state.count - decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: state.count = 0
            }
        default:
            return state
    }
})

// Fetch store state
// console.log(store.getState())

// subscribe() function gets called every time the state change
// You can use subscribe() to update the UI in response to state changes.
const unsubscribe = store.subscribe(() => console.log(store.getState()))

// Actions
// Important part is that you should not mutate the state object, but return a new object if the state changes.
store.dispatch({ 
    type: 'INCREMENT',
    incrementBy: 5 
})

// Call here to stop watching
// unsubscribe()

store.dispatch({ type: 'RESET' })
store.dispatch({ type: 'DECREMENT' })
store.dispatch({ 
    type: 'DECREMENT',
    decrementBy: 5
})

store.dispatch({
    type: 'SET',
    count: 100
 })

// console.log(store.getState())