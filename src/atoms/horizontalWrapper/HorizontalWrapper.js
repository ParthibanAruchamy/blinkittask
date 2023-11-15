import React from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";
import styles from "./horizontalWrapper.module.scss";

function HorizontalWrapper({className = "", children, ...rest }) {
  return (
    <div className={classNames(styles.horizontalWrapper, className)} {...rest}>
      {children}
    </div>
  )
}

HorizontalWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
};

export default HorizontalWrapper;
