import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from "./text.module.scss";

function Text({className="", value}) {
  return (
    <p className={classNames(styles.text, className)}>{value}</p>
  )
}

Text.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
}

export default Text;

