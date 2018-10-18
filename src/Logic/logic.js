
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

  calculateSubTotal(Newproduct) {
    let subTotal = Newproduct.price * Newproduct.qty
    return subTotal.toFixed(2);
  },

  calculateTotal(Allproducts) {
    let total = Allproducts.price * Allproducts.qty
    return total.toFixed(2)
  },
  
  removeItem() {
    // Build me!
  },
};

module.exports = logic;
