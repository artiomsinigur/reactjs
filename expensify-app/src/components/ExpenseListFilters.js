import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters'

function ExpenseListFilters(props) {
    return (
        <div>
            <input type='text' onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value))
            }} />
            <div>
                <input 
                    type='radio' 
                    name='sortBy' 
                    id='sortByDate' 
                    value='date' 
                    onChange={(e) => {
                        props.dispatch(sortByDate())
                    }} 
                />
                <label htmlFor='sortByDate'>Sort by date</label>
            </div>
            <div>
                <input 
                    type='radio' 
                    name='sortBy' 
                    id='sortByAmount' 
                    value='amount' 
                    onChange={(e) => {
                        props.dispatch(sortByAmount())
                    }} 
                />
                <label htmlFor='sortByAmount'>Sort by amount</label>
            </div>
            <div>
                <select name="sortBy" onChange={(e) => {
                    if(e.target.value === 'date') {
                        props.dispatch(sortByDate())
                    } else if(e.target.value === 'amount') {
                        props.dispatch(sortByAmount())
                    }
                }}>
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)