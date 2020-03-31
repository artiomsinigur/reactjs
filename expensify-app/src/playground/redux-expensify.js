store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

// Expenses
const expenseOne = store.dispatch(addExpense({ desc: 'Rent', amount: 200, createAt: -21000 }))
const expenseTwo = store.dispatch(addExpense({ desc: 'T-Short', amount: 3500, createAt: -1000 }))
// store.dispatch(removeExpenseById(expenseOne.expense.id))
// store.dispatch(editExpenseById(expenseTwo.expense.id, { amount: 4000 }))

// Filters
// store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter())
store.dispatch(sortByAmount())
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