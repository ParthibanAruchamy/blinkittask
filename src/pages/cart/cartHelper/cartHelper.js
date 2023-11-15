import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../../../stores/cart";

export const increaseCount = (product, count, dispatch) => {
  if (count === 0) {
    dispatch(addToCart(product));
  } else {
    dispatch(incrementQuantity(product));
  }
};
export const decreaseCount = (product, count, dispatch) => {
  if (count === 1) {
    dispatch(removeItem(product));
  } else {
    dispatch(decrementQuantity(product));
  }
};

export const getTotalQuantity = (cart) => {
  let total = 0;
  cart.forEach((item) => {
    total += item?.quantity;
  });
  return total;
};

export const findTotal = (obj) => {
  let initialValue = 0;
  let sum = obj.reduce(function (accumulator, curValue) {
    return accumulator + curValue?.sellingPrice * curValue?.quantity;
  }, initialValue);
  return sum;
};
