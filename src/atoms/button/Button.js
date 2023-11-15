import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./button.module.scss";

function Button({ className = "", value, onClick = () => {}, ...rest}) {
  return (
    <button onClick={onClick} className={classNames(styles.button, className)} {...rest}>{value}</button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onClick : PropTypes.func
};

export default Button;
