
const { add } = require('./logic');


test('can add 5 + 5 to be 10', () => {
 expect(add(5, 5)).toBe(10)
});

test('can add 2 + 2 to be 4', () => {
 expect(add(2, 2)).toBe(4)
});

test('if given a string throw an error', () => {
 expect(add('Bob', 'Dan')).toThrowError()
});
