const axios = require('axios');

const logic = {
  toggle(value) {
    return !value
  },

  addToCart(product, cart) {
    let index = cart.findIndex((item) => item.id === product.id)
    if(index === -1) {
      product.qty = 1;
      cart.push(product)
    } else {
      cart[index].qty += 1;
    }
    return cart
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
