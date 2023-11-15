import React from "react";
import PropTypes from 'prop-types';
import HorizontalWrapper from "../../atoms/horizontalWrapper";
import classNames from "classnames";
import Text from "../../atoms/text";
import SideBarImage from "../../atoms/sideBarImage/SideBarImage";
import styles from './productsidebar.module.scss'

const ProductSideBar = ({
  className="",
  product,
  selectedSubCategory,
  setselectedSubCategory,
}) => {
  return (
    <div className={styles.container}>
      {product?.items?.map((item, index) => (
        <HorizontalWrapper
          key={index}
          className={classNames(styles.sideBarItem, selectedSubCategory === item?.id ? styles.selectedSideBarItem : null)}
          onClick={() => {
            setselectedSubCategory(item?.id);
          }}
        >
          <SideBarImage className={classNames(styles.sideBarItemImage, className)} imageUrl={`${item?.categoryImage}`} />
          <Text className={styles.sideBarItemName} value={item?.categoryName}/>
        </HorizontalWrapper>
      ))}
    </div>
  );
};

ProductSideBar.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object,
  selectedSubCategory: PropTypes.string,
  setselectedSubCategory: PropTypes.string,
}

export default React.memo(ProductSideBar);
