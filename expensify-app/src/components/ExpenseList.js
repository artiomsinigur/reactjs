import React from 'react'
import { connect } from 'react-redux'

const ExpenseList = (props) => (
    <div>
        <h1>ExpenseList</h1>
        {props.expenses.length}
        {props.filters.text}
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    }
}

// 2. Redux provides a Connect function to connect components to the store.
export default connect(mapStateToProps)(ExpenseList)