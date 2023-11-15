import React, { useEffect, useState } from "react";
import ProductTile from "../../molecules/producttile/ProductTile";
import ProductSideBar from "../../molecules/productsidebar";
import { productItems } from "../../data/productItems";
import MainMenu from "../../organisms/mainMenu";
import VerticalWrapper from "../../atoms/verticalWrapper";
import HorizontalWrapper from "../../atoms/horizontalWrapper";
import Text from "../../atoms/text";
import styles from './products.module.scss';

function Products() {
  const [selectedMainCategory, setSelectedMainCategory] = useState(productItems[0]?.id);
  const [selectedSubCategory, setselectedSubCategory] = useState(productItems[0]?.items[0]?.id);
  const [sideBarItems, setSideBarItems] = useState(productItems[0]?.items);

  const getProducts = React.useCallback(() => {
    let products = [];
    productItems.forEach((element) => {
      if (element.id === selectedMainCategory) {
        element.items.forEach((item) => {
          if (item.id === selectedSubCategory) {
            products = item.products;
          }
        });
      }
    });
    return products;
  }, [selectedSubCategory, selectedMainCategory]);

  const getCategory = React.useCallback(() => {
    let category = "";
    productItems.forEach((element) => {
      if (element.id === selectedMainCategory) {
        element.items.forEach((item) => {
          if (item.id === selectedSubCategory) {
            category = item.categoryName;
          }
        });
      }
    });
    return category;
  }, [selectedSubCategory, selectedMainCategory]);


  useEffect(() => {
    setSideBarItems(productItems.filter((item) => item.id === selectedMainCategory))
  }, [selectedMainCategory])

  const updateCategory = (subCategoryId) => {
    setselectedSubCategory(subCategoryId);
  };

  return (
    <VerticalWrapper className= {StyleSheet.container}>
      <MainMenu {...{selectedMainCategory, setSelectedMainCategory}} />
      <HorizontalWrapper className={styles.sideBarContainer}>
        <VerticalWrapper className={styles.sideBarItem}>
          { sideBarItems?.map((item, index) => (
            <ProductSideBar
              product={item}
              key={index}
              selectedSubCategory={selectedSubCategory}
              setselectedSubCategory={updateCategory}
            />
          )) }
        </VerticalWrapper>
        <VerticalWrapper className={styles.productContainer}>
          { getCategory() ? <Text className={styles.categoryHeaderText} value={getCategory()} /> : null }
          <HorizontalWrapper className={styles.productTileContainer}>
            {getProducts()?.map((each, index) => (
              <ProductTile 
              product={each}
              key={index}
              />
            ))}
          </HorizontalWrapper>
        </VerticalWrapper>
      </HorizontalWrapper>
    </VerticalWrapper>
  );
}

export default Products
