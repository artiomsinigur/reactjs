import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from '../routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter, sortByDate, sortByAmount } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
// Inject CSS into the DOM
import './styles/style.scss'

const store = configureStore()
store.dispatch(addExpense({ desc: 'Weater bill', amount: 500, createdAt: 2500 }))
store.dispatch(addExpense({ desc: 'Meal bill', amount: 1600, createdAt: -3600 }))
store.dispatch(setTextFilter('bill'))
// store.dispatch(sortByAmount())

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

// 1. Redux Provider makes the Redux store available to the rest of app
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));