import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Text from "../../atoms/text/Text";
import VerticalWrapper from "../../atoms/verticalWrapper/VerticalWrapper";
import styles from "./cartHeader.module.scss";

function CartHeader({ className = "", count }) {
  return (
    <VerticalWrapper>
      <>
        <Text
          className={classNames(styles.placeOrderHead, className)}
          value="Place Order"
        />
        <Text
          className={classNames(styles.deliveryText, className)}
          value="Delivery in 10 Minutes"
        />
        <Text
          className={classNames(styles.itemsCount, className)}
          value={`${count} Items`}
        />
      </>
    </VerticalWrapper>
  );
}

CartHeader.propTypes = {
  className: PropTypes.string,
  count: PropTypes.number,
};

export default CartHeader;
