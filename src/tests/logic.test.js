const { toggle, getProducts, addToCart, calculateSubTotal, calculateTotal, removeItem } = require('../Logic/logic');

const product = {
  id: 1,
  product: 'Fillets',
  price: 69.41,
  image: 'http://goodtogostore.com/product-package-images/192837494.jpg',
};

describe('Tests Toggle Show button', () => {
  test('if given true return false', () => {
    expect(toggle(true)).toBe(false);
  })

  test('if given false return true', () => {
      expect(toggle(false)).toBe(true)
  })

  test('if given a string with text return false', () => {
    expect(toggle('hey there')).toBe(false)
  })

  test('if given a falsy value return true', () => {
    expect(toggle('')).toBe(true)
  })
});

describe('Can add item to cart', () => {});

describe('can calculate sub total', () => {});

describe('can calculate Total', () => {});

describe('can remove item', () => {});
