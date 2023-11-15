import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {
  findTotal,
  getTotalQuantity,
} from "../../pages/cart/cartHelper/cartHelper";
import HorizontalWrapper from "../../atoms/horizontalWrapper";
import Text from "../../atoms/text";
import styles from "./myCart.module.scss";

export default function MyCart() {
  const [tolalCount, settolalCount] = useState(0);
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  useEffect(() => {
    settolalCount(getTotalQuantity(cart));
  }, [cart]);

  const handleNavigate = () => {
    if (cart.length > 0) {
      navigate("/cart");
    } else {
      return;
    }
  };
  const cartWithItem = (tolalCount) => {
    return (
      <HorizontalWrapper className={styles.cartWithItem}>
        <Text className={styles.textBold} value={`${tolalCount} Items`} />
        <HorizontalWrapper className={styles.cartWithItemSub}>
          <Text className={styles.textBold} value={`₹ ${findTotal(cart)}`} />
        </HorizontalWrapper>
      </HorizontalWrapper>
    );
  };
  const cartWithoutItem = () => {
    return (
      <HorizontalWrapper className={styles.cartWithoutItem}>
        <Text className={styles.textBold} value={`My Cart`} />
      </HorizontalWrapper>
    );
  };

  return (
    <HorizontalWrapper
      className={styles.container}
      onClick={() => handleNavigate()}
    >
      <HorizontalWrapper className={styles.subContainer}>
        <AiOutlineShoppingCart className={styles.cartLogo} />
        {tolalCount ? cartWithItem(tolalCount) : cartWithoutItem}
      </HorizontalWrapper>
    </HorizontalWrapper>
  );
}
