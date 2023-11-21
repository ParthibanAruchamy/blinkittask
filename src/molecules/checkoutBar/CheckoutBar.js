import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Text from '../../atoms/text/Text';
import styles from './checkoutBar.module.scss';

function CheckoutBar({className="", quantity, totalPrice}) {
  return (  
    <div className={classNames(styles.checkoutBar, className)}>
        <Text value={`${quantity} Items: ₹ ${totalPrice}`} />
        <Text value="Proceed >" />
      </div>
  )
}

CheckoutBar.propTypes = {
    className: PropTypes.string,
    quantity: PropTypes.number,
    totalPrice: PropTypes.string,
}

export default CheckoutBar

