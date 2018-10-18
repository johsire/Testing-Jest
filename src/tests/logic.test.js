
const { toggle, getProducts, addToCart, calculateSubTotal, calculateTotal, removeItem } = require('../Logic/logic');

const product = {
  id: 1,
  product: 'Fillets',
  price: 69.41,
  image: 'http://goodtogostore.com/product-package-images/192837494.jpg',
};

describe('Tests Toggle Show button', () => {

  let cart = [];

  beforeEach(() => {
    cart = [];
  });


  test('if given true return false', () => {
    expect(toggle(true)).toBe(false);
  })

  test('if given false return true', () => {
    expect(toggle(false)).toBe(true);
  })

  test('if given a string with text return false', () => {
    expect(toggle('hey there')).toBe(false)
  })

  test('if given a falsey value, return true', () => {
    expect(toggle('')).toBe(true)
  })
  
describe('Can add item to cart', () => {

  test('can add an item to the cart', () => {
    expect(addToCart(product, cart)).toHaveLength(1)
  })

  test('returns an array', () => {
    let newCart = addToCart(product, cart);
    expect(Array.isArray(newCart)).toBeTruthy();
  })

  test('added items have quantity property', () => {
    expect(addToCart(product, cart)[0]).toHaveProperty('qty');
  })

  test('updates quantity when adding a repeated item', () => {
    let newCart = addToCart(product, cart);
    expect(addToCart(product, newCart)).toHaveLength(1)
  })

  test('Should not modify product', () => {
    addToCart(product, cart);
    // it should NOT have the prop qty:
    expect(product).not.toHaveProperty('qty');
  })

  test('returned array should be a new array', () => {
    expect(addToCart(product, cart)).not.toBe(cart)
  })

  test('if added a second unique item it should have a length of 2', () => {
    let newCart = addToCart(product, cart);
    expect(addToCart({ name: 'bloons', id: 50 }, newCart)).toHaveLength(2);
  });
 });
});

describe('can calculate sub total', () => {});

describe('can calculate Total', () => {});

describe('can remove item', () => {});
