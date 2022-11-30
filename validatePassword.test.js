const validatePassword = require('./validatePassword')

test('return false given an empty string', () => {
    expect(validatePassword("")).toBe(false)
})

test("returns true dado 8 caracteres ou mais", () => {
    expect(validatePassword("1234567a")).toBe(true)
  })