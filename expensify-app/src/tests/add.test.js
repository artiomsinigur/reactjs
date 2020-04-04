const add = (a, b) => a + b
const generateGreeting = (name) => `Hello ${name}`

test('Should add two numbers', () => {
    expect(add(3, 5)).toBe(8)
})

test('Should display string Mark', () => {
    expect(generateGreeting('Mark')).toBe('Hello Mark')
})