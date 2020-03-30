import { createStore, combineReducers } from 'redux'
import { v4 as uuidv4 } from 'uuid'

// Actions
// ===========================
const addExpense = ({ desc = '', note = '', amount = 0, createAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        desc: String(desc),
        note,
        amount,
        createAt
    }
})

const removeExpenseById = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
})

const editExpenseById = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
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
        case 'EDIT_EXPENSE':
            return state.map(expense => {
                if (expense.id === action.id) {
                    return { ...expense, ...action.updates }
                } else {
                    return expense
                }
            })
        default:
            return state
    }
}


// Actions
// ===========================
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    text
})

const sortByAmount = () => ({ type: 'SORT_BY_AMOUNT' })
const sortByDate = () => ({ type: 'SORT_BY_DATE' })

const setStartDate = (startDate = null) => ({ type: 'SET_START_DATE', startDate })
const setEndDate = (endDate = null) => ({ type: 'SET_END_DATE', endDate })

// Reducers
// ============================
const filtersReducer = (state = { text: '', sortBy: 'date', startDate: null, endDate: null }, action) => {
    switch (action.type) {
        case 'SET_TEXT':
            return { ...state, text: action.text }
        case 'SORT_BY_AMOUNT':
            return { ...state, sortBy: 'amount' }
        case 'SORT_BY_DATE':
            return { ...state, sortBy: 'date' }
        case 'SET_START_DATE':
            return { ...state, startDate: action.startDate }
        case 'SET_END_DATE':
            return { ...state, endDate: action.endDate }
        default:
            return state
    }
}

// Get visible expenses
// const getVisibleExpenses = (expenses, filters)
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate
        const textMatch = expense.desc.toLowerCase().includes(text.toLowerCase())

        return textMatch && startDateMatch && endDateMatch
    })
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

// Expenses
const expenseOne = store.dispatch(addExpense({ desc: 'Rent', amount: 200, createAt: 1000 }))
const expenseTwo = store.dispatch(addExpense({ desc: 'T-Short', amount: 3500, createAt: -1000 }))
// store.dispatch(removeExpenseById(expenseOne.expense.id))
// store.dispatch(editExpenseById(expenseTwo.expense.id, { amount: 4000 }))

// Filters
store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter())
// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(0))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1000))


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