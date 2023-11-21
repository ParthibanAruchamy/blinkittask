import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from "./label.module.scss";

function Label({className='', lblText}) {
  return (
    <label className={classNames(styles.label, className)}>{lblText}</label>
  )
}

Label.propTypes = {
  className: PropTypes.string,
  lblText: PropTypes.string,
}

export default Label;
