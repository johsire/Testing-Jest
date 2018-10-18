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

describe('Can add item to cart', () => {
  test('Can add item to cart', () => {
    let cart = []
    expect(addToCart(product, cart)).toHaveLength(1)
  });

  test('returns an array', () => {
    let cart = [];
    let newCart = addToCart(product, cart)
    expect(Array.isArray(newCart)).toBeTruthy();
  })

  test('added items have quantity property', () => {
    let cart = [];
    expect(addToCart(product, cart)[0]).toHaveProperty('qty');
  })

  test('Updates quantity when adding a repeat item', () => {
    let cart = [];
    let newCart = addToCart(product, cart);
    expect(addToCart(product, newCart)).toHaveLength(1)
  })
});

describe('can calculate sub total', () => {});

describe('can calculate Total', () => {});

describe('can remove item', () => {});
