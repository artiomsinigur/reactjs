import React from 'react'
import { escape, unescape } from 'validator'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize' // To fixed a bug

export default class ExpenseForm extends React.Component {
    state = {
        desc: '',
        note: '',
        amount: '',
        createdAt: moment(),
        focused: false,
    }

    onDescChange = (e) => {
        const desc = e.target.value
        this.setState(() => ({ desc: escape(desc) }))
    }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }

    onAmountChange = (e) => {
        const amount = e.target.value
        // console.log(amount.match(/^\d*(,\d{0,3})*(\.\d{0,2})?$/))
        // new Intl.NumberFormat().format(amount)
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }

    onDateChange = (createdAt) => {
        this.setState(() => ({ createdAt }))
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ focused }))
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <input 
                            type="text" 
                            placeholder="Description" 
                            value={unescape(this.state.desc)}
                            onChange={this.onDescChange}
                            autoFocus
                        />
                    </div>
                    <div>
                        <input 
                            type="text" 
                            placeholder="Amount" 
                            value={this.state.amount}
                            onChange={this.onAmountChange}
                        />
                    </div>
                    <div>
                        <SingleDatePicker
                            date={this.state.createdAt} // momentPropTypes.momentObj or null
                            onDateChange={this.onDateChange} // PropTypes.func.isRequired
                            focused={this.state.focused} // PropTypes.bool
                            onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
                            id="expenseDataPicker" // PropTypes.string.isRequired,
                            numberOfMonths={ 1 }
                            isOutsideRange={() => false}
                        />
                    </div>
                    <div>
                        <textarea 
                            placeholder="Add a note for your expense (optional)" 
                            value={this.state.note}
                            onChange={this.onNoteChange}
                        />
                    </div>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}