import React from "react";

const Product = ({ product, setselectedSubCategory }) => {
  console.log("product", product);
  return (
    <div className="px-3">
      {product.items.map((item, index) => (
        <div
          className="border-b-2 mb-4 flex items-center flex-row cursor-pointer"
          onClick={() => {
            setselectedSubCategory(product.id, item.id);
          }}
        >
          <div className="flex flex-col">
            <img
              className="w-[50px] object-cover"
              src={`${item?.categoryImage}`}
              alt=""
            />
          </div>
          <p className="px-5">{item.categoryName}</p>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Product);
