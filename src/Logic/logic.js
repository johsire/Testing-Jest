
const axios = require('axios');

const logic = {
  toggle(value) {
    return !value
  },

  addToCart(product, cart) {
    let productCopy = { ...product };
    let copyCart = [...cart];

    let index = copyCart.findIndex((item) => item.id === productCopy.id)
    if(index === -1) {
      productCopy.qty = 1;
      copyCart.push(productCopy)
    } else {
      copyCart[index].qty += 1;
    }
    return copyCart;
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
