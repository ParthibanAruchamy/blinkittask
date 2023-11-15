import React from "react";
import PropTypes from "prop-types";
import QuantityButton from "../quantityButton/QuantityButton";
import { useDispatch, useSelector } from "react-redux";
import { incrementQuantity } from "../../stores/cart";
import { findInCart } from "./productTileHelper/productTileHelper";
import VerticalWrapper from "../../atoms/verticalWrapper/VerticalWrapper";
import CartImage from "../../atoms/cartImage";
import Text from "../../atoms/text";
import Button from "../../atoms/button";
import HorizontalWrapper from "../../atoms/horizontalWrapper";
import styles from "./producttile.module.scss";

function ProductTile({ product }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <VerticalWrapper className={styles.container}>
      <VerticalWrapper>
        <CartImage
          className={styles.productImage}
          imageUrl={product.productImage}
        />
        <Text className={styles.productName} value={product?.productName} />
      </VerticalWrapper>
      <HorizontalWrapper className={styles.productPriceContainer}>
        <HorizontalWrapper className={styles.sellingPrice}>
          <Text
            className={styles.sellingPriceText}
            value={`₹ ${product?.sellingPrice}`}
          />
        </HorizontalWrapper>
        {findInCart(cart, product) === undefined ? (
          <Button
            className={styles.addtoCartBtn}
            value="ADD"
            onClick={() => {
              dispatch(incrementQuantity(product));
            }}
          />
        ) : (
          <QuantityButton product={product} count={findInCart(cart, product)} />
        )}
      </HorizontalWrapper>
    </VerticalWrapper>
  );
}

ProductTile.propTypes = {
  product: PropTypes.object,
};

export default ProductTile;
