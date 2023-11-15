import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from './cartImage.module.scss'

function CartImage({className="", imageUrl=""}) {
  return (
    <div className={classNames(styles.container, className)}>
      <img className={styles.cartImage} src={imageUrl} alt="" />
    </div>
  );
}

CartImage.propTypes = {
    className: PropTypes.string,
    imageUrl: PropTypes.string,

};

export default CartImage;
