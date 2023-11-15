export const findInCart = (cart, product) => {
  let itemInCart = cart.filter((cartItem) => cartItem.id === product.id);
  if (itemInCart) {
    return itemInCart[0]?.quantity;
  } else {
    return 0;
  }
};
