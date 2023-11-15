import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from "./input.module.scss";


function Input({className='', type, value, placeholder='', ...rest}) {
  return (
    <input className={classNames(styles.input, className)} type={type} value={value} placeholder={placeholder} {...rest} />
  )
}

Input.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
}

export default Input;
