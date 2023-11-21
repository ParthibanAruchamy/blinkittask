import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import QuantityButton from "../quantityButton";
import { findInCart } from "../producttile/productTileHelper/productTileHelper";
import CartImage from "../../atoms/cartImage";
import Text from "../../atoms/text";
import HorizontalWrapper from "../../atoms/horizontalWrapper";
import VerticalWrapper from "../../atoms/verticalWrapper/VerticalWrapper";
import styles from "./cartTile.module.scss";

function CartTile({ product }) {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <HorizontalWrapper className={styles.container}>  
        <HorizontalWrapper className={styles.subContainer}>
          <CartImage className={styles.productTile} imageUrl={product?.productImage} />
          <VerticalWrapper className={styles.productDiv}>
            <Text className={styles.smallText} value={product?.productName}/>
            <Text className={styles.smallText} value={product?.productQuantity} />
            <span className={styles.boldText}>{product?.sellingPrice}</span>
            <span className={styles.lineThroughText}>{product?.actualPrice} </span>
          </VerticalWrapper>
        </HorizontalWrapper>
        <QuantityButton product={product} count={findInCart(cart, product)} />
      </HorizontalWrapper>
    </>
  );
}

CartTile.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object,
};

export default CartTile;
