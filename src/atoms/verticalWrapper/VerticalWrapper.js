import React from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";
import styles from "./verticalWrapper.module.scss";

function VerticalWrapper({className = "", children, ...rest }) {
  return (
    <div className={classNames(styles.verticalWrapper, className)} {...rest}>
      {children}
    </div>
  )
}

VerticalWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
};

export default VerticalWrapper;