import { createStore, combineReducers } from 'redux'
import { v4 as uuidv4 } from 'uuid'

// Actions
// ===========================
const addExpense = ({ desc = '', note = '', amount = 0, createAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        desc,
        note,
        amount,
        createAt
    }
})

const removeExpenseById = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// Reducers
// ============================
const expensesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            // return state.concat(action.expense)
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(item => item.id !== action.id)
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

store.subscribe(() => console.log(store.getState()))

const expenseOne = store.dispatch(addExpense({ desc: 'Rent', amount: 200 }))
store.dispatch(addExpense({ desc: 'T-Short', amount: 3500 }))
store.dispatch(removeExpenseById(expenseOne.expense.id))


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