import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Text from "../../atoms/text/Text";
import styles from "./cartSummaryRow.module.scss";

function CartSummaryRow({ className = "", text = "", value = "" }) {
  return (
    <div className={classNames(styles.summaryRow, className)}>
      <Text className={className} value={text} />
      <Text className={className} value={value} />
    </div>
  );
}

CartSummaryRow.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.string,
};

export default CartSummaryRow;
