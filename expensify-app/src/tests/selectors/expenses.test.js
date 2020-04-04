import selectExpenses from '../../selectors/expenses'
import moment from 'moment'

const expenses = [{
    id: '1',
    desc: 'Gym',
    note: '',
    amount: 1900,
    createdAt: moment(0)
}, {
    id: '2',
    desc: 'Rent car',
    note: '',
    amount: 35000,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    desc: 'Buy TV',
    note: '',
    amount: 250000,
    createdAt: moment(0).add(4, 'days').valueOf()
}]

test('Should filter by text value', () => {
    const filters = {
        text: 'Buy',
        sortBy: 'date',
        startDate: null,
        endDate: null
    }
    const expectedData = selectExpenses(expenses, filters)
    expect(expectedData).toEqual([expenses[2]])
})

test('Should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: null
    }
    const expectedData = selectExpenses(expenses, filters)
    expect(expectedData).toEqual([expenses[2], expenses[0]])
})

test('Should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: null,
        endDate: moment(0).subtract(4, 'days')
    }
    const expectedData = selectExpenses(expenses, filters)
    expect(expectedData).toEqual([expenses[1]])
})

test('Should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: null,
        endDate: null
    }
    const expectedData = selectExpenses(expenses, filters)
    expect(expectedData).toEqual([expenses[2], expenses[0], expenses[1]])
})

test('Should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: null,
        endDate: null
    }
    const expectedData = selectExpenses(expenses, filters)
    expect(expectedData).toEqual([expenses[2], expenses[1], expenses[0]])
})