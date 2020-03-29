import { createStore } from 'redux' 

const store = createStore((state = { count: 0 }) => {
    return state
})

// Fetch store state

console.log(store.getState())