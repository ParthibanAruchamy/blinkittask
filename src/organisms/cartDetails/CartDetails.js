import React from "react";
import PropTypes from "prop-types";
import VerticalWrapper from "../../atoms/verticalWrapper/VerticalWrapper";
import CartHeader from "../../molecules/cartHeader/CartHeader";
import { getTotalQuantity } from "../../pages/cart/cartHelper/cartHelper";

function CartDetails({className=""}) {
  const cart = useSelector((state) => state.cart);

  return (
    <VerticalWrapper className={classNames(styles.container, className)}>
      <CartHeader count={getTotalQuantity(cart)} />
    </VerticalWrapper>
  );
}

CartDetails.propTypes = {
    className: PropTypes.string,
};

export default CartDetails;
