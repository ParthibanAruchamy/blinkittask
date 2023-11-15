import React from "react";
import { useNavigate } from "react-router-dom";
import VerticalWrapper from "../../atoms/verticalWrapper";
import Image from "../../atoms/image";
import Text from "../../atoms/text";
import Button from "../../atoms/button";
import styles from "./emptyCart.module.scss";

function EmptyCart() {
  const navigate = useNavigate();
  const goToShopping = () => navigate("/products");

  return (
    <VerticalWrapper className={styles.container}>
      <Image
        className={styles.emptyCartImage}
        imageUrl={`https://cdn.grofers.com/assets/ui/empty_states/emp_empty_cart.png`}
      />
      <Text
        className={styles.noItemsText}
        value="You don't have any items in your cart"
      />
      <Text
        className={styles.noItemsText}
        value="Your favourite items are just a click away"
      />
      <Button
        className={styles.continueShopping}
        value="Start Shopping"
        onClick={goToShopping}
      />
    </VerticalWrapper>
  );
}

export default EmptyCart;
