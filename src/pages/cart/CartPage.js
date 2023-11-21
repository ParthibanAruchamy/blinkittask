import React from "react";
import { useSelector } from "react-redux";
import CartTile from "../../molecules/cartTile/CartTile";
import { findTotal, getTotalQuantity } from "./cartHelper/cartHelper";
import CartSummary from "../../molecules/cartSummary/CartSummary";
import CartHeader from "../../molecules/cartHeader/CartHeader";
import HorizontalWrapper from "../../atoms/horizontalWrapper";
import VerticalWrapper from "../../atoms/verticalWrapper";
import EmptyCart from "../../molecules/emptyCart";
import styles from './cartPage.module.scss'

export default function CartPage() {
  const cart = useSelector((state) => state.cart);

  return (
    <HorizontalWrapper className={styles.container} >
      {cart?.length > 0 ? (
        <VerticalWrapper>
          <CartHeader count={getTotalQuantity(cart)} />
          {cart.map((item, index) => (
            <CartTile
              product={item}
              key={index}
              inCartItem={cart.filter((cartItem) => cartItem.id === item.id)}
            />
          ))}
          {findTotal(cart) > 0 && (
            <CartSummary
              quantity={getTotalQuantity(cart)}
              totalPrice={findTotal(cart).toFixed(2)}
            />
          )}
        </VerticalWrapper>
      ) : (
        <EmptyCart />
      )}
    </HorizontalWrapper>
  );
}
