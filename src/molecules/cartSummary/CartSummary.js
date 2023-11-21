import React from "react";
import CheckoutBar from "../checkoutBar";
import PropTypes from 'prop-types'
import CartSummaryRow from "../cartSummaryRow/CartSummaryRow";
import styles from './cartSummary.module.scss'

function CartSummary({quantity, totalPrice}) {
  return (
    <>
      <CartSummaryRow text='MRP' value='MRP' />
      <CartSummaryRow text='Product Discount' value='MRP' />
      <CartSummaryRow text='Delivery Charges' value='MRP' />
      <CartSummaryRow className={styles.boldText} text='Grand Total' value={totalPrice} />
      <CartSummaryRow className={styles.smallText} text='* Coupens are only applicable on the BlinkIT app' />      
      <CheckoutBar {...{quantity, totalPrice}}/>
    </>
  )
}

CartSummary.propTypes = {
quantity: PropTypes.number,
totalPrice: PropTypes.string,
}

export default CartSummary
