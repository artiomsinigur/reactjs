import { createStore, combineReducers } from 'redux'

const expensesReducer = (state = [], action) => {
    switch (action.type) {
        default:
            return state
    }
}

const filtersReducer = (state = { text: '', sortBy: 'date', startDate: null, endDate: null }, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

console.log(store.getState())

const demoState = {
    expenses: [{
        id: 'asdwers',
        desc: 'January rent',
        note: 'This was the place where we spend more',
        amount: 1950000,
        createAt: 0
    }],
    filters: {
        text: 'some text',
        sortBy: 'amount', // amount or date
        startDate: null,
        endDate: null
    }
}