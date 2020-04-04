const add = (a, b) => a + b

test('Should add two numbers', () => {
    expect(add(3, 5)).toBe(8)
})