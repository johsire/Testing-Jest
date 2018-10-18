const axios = require('axios');

const logic = {
  toggle(value) {
    return !value
  },
  addToCart(product, cart) {
    // Build me!
    product.qty = 1;
    cart.push(product)
    return cart;
  },
  calculateSubTotal() {
    // Build me!
  },
  calculateTotal() {
    // Build me!
  },
  removeItem() {
    // Build me!
  },
};

module.exports = logic;
