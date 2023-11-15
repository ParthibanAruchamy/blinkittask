import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import styles from './sideBarImage.module.scss'


function SideBarImage({className="", imageUrl=""}) {
    return (
      <div className={classNames(styles.container, className)}>
        <img className={styles.sideBarImage} src={imageUrl} alt="" />
      </div>
    );
  }
  
  SideBarImage.propTypes = {
      className: PropTypes.string,
      imageUrl: PropTypes.string,
  
  };
  
  export default SideBarImage;

