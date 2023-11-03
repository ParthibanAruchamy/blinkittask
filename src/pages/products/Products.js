import React, { useEffect, useState } from "react";
import ProductTile from "../../molecules/producttile/ProductTile";
import Mainmenu from "../../organisms/mainmenu";
import ProductSideBar from "../../molecules/productsidebar";
import { productItems } from "../../data/productItems";
import { useSelector } from "react-redux";

export default function Products() {
  const [selectedMainCategory, setSelectedMainCategory] = useState(false);
  const [selectedSubCategory, setselectedSubCategory] = useState(null);
  // const [productList, setproductList] = useState([]);
  const cart = useSelector((state) => state.cart);

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

  const updateCategory = (mainCategoryId, subCategoryId) => {
    setSelectedMainCategory(mainCategoryId);
    setselectedSubCategory(subCategoryId);
  };

  return (
    <div className="flex flex-col bg-gray-50 p-5">
      <Mainmenu />
      <div className="flex flex-row bg-gray-50 p-5">
        <div className="flex flex-col w-1/4">
          { productItems.map((item, index) => (
            <ProductSideBar
              product={item}
              key={index}
              setselectedSubCategory={updateCategory}
            />
          )) }
        </div>
        <div className="flex-1 flex flex-col">
          { getCategory() ? <p className="font-bold border-b-2 py-2 mb-3 bg-gray-100 pl-5">{getCategory()}</p> : null }
          <div className="w-full flex flex-row flex-wrap">
            {getProducts()?.map((each, index) => (
              <ProductTile product={each}
              key={index}
              inCartItem={cart.filter((cartItem) => cartItem.id === each.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
