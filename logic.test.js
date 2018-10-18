
const {add} = require('./logic');

describe('Testing the add function', () => {

  test('can add 2 + 2 to be 4', () => {
    expect(add(2, 2)).toBe(4)
  })
  
  test('can add 5 + 5 to be 10', () => {
    expect(add(5, 5)).toBe(10)
  })
  
  test('can add 0.1 + 0.2 to be 0.3', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3)
  })
  
  test('if given a string throw an error', () => {
    expect(() => add('Bob', 'Ross')).toThrowError()
  })
  
  test('if given an object throw an error', () => {
    expect(() => add({}, {})).toThrowError()
  })
});
