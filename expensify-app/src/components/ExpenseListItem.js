import React from 'react'
import { removeExpenseById } from '../actions/expenses'
import { connect } from 'react-redux'

function ExpenseListItem({ dispatch, id, desc, amount, createdAt }) {
    return (
        <tr>
            <th>{desc}</th>
            <td>{amount}</td>
            <td>{createdAt}</td>
            <td><button type="button" onClick={() => {
                dispatch(removeExpenseById(id))
            }}>Remove</button></td>
        </tr>
    )
}

// We don't need the state so we don't use mapStateToProps
// Export the component to have access to dispatch() props
export default connect()(ExpenseListItem)