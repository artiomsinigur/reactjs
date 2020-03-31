import { v4 as uuidv4 } from 'uuid'

// Actions
// ===========================
export const addExpense = ({ desc = '', note = '', amount = 0, createAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        desc: String(desc),
        note,
        amount,
        createAt
    }
})

export const removeExpenseById = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
})

export const editExpenseById = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})