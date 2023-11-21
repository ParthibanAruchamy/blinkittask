import React from "react";
import PropTypes from "prop-types";
import { TfiPlus, TfiMinus } from "react-icons/tfi";
import { useDispatch } from "react-redux";
import {
  decreaseCount,
  increaseCount,
} from "../../pages/cart/cartHelper/cartHelper";
import VerticalWrapper from "../../atoms/verticalWrapper/VerticalWrapper";
import HorizontalWrapper from "../../atoms/horizontalWrapper";
import Text from "../../atoms/text";
import styles from "./quantityButton.module.scss";

function QuantityButton({ product, count }) {
  const dispatch = useDispatch();
  return (
    <VerticalWrapper className={styles.container}>
      <HorizontalWrapper className={styles.btnContainer}>
        <TfiMinus
          className={styles.btnIcon}
          onClick={() => decreaseCount(product, count, dispatch)}
        />
        <Text className={styles.countText} value={count} />
        <TfiPlus
          className={styles.btnIcon}
          onClick={() => increaseCount(product, count, dispatch)}
        />
      </HorizontalWrapper>
    </VerticalWrapper>
  );
}
QuantityButton.propTypes = {
  product: PropTypes.object,
  count: PropTypes.any,
};

export default QuantityButton;
