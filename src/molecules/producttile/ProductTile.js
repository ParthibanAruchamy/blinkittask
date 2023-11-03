import React, { useState } from "react";
import QuantityButton from "../quantityButton/QuantityButton";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "../../stores/cart";
import { BiRupee } from "react-icons/bi";

export default function ProductTile({ product, inCartItem }) {
  console.log("product", product);
  console.log("inCartItem", inCartItem);
  const [count, setCount] = useState(inCartItem?.quantity || 0);
  const dispatch = useDispatch();

  const addOrIncrease = (setcount) => {
    setcount(count + 1);
    dispatch(incrementQuantity(product));
  };

  const removeOrDecrease = (setcount) => {
    setcount(count - 1);
    dispatch(decrementQuantity(product));
  };

  return (
    <div className="flex flex-col flex-wrap rounded-lg border-2 m-1 w-1/4">
      <div className="flex-1 flex flex-col items-center">
        <img className="h-[200px]" src={product.productImage} alt="" />
        <h3 className="break-normal text-sm font-bold p-2">
          {product?.productName}
        </h3>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row justify-between items-center ml-2">
          <BiRupee />
          <p className="font-bold text-sm text-left">{product?.sellingPrice}</p>
        </div>
        {count === 0 ? (
          <button
            className="border-2 w-[70%] rounded-lg px-5 py-2 m-1 bg-green-50 border-green-800 text-green-800 font-bold "
            onClick={() => {
              setCount(count + 1);
              dispatch(addToCart(product));
            }}
          >
            ADD
          </button>
        ) : (
          <QuantityButton
            count={count}
            setCount={setCount}
            addOrIncrease={addOrIncrease}
            removeOrDecrease={removeOrDecrease}
          />
        )}
      </div>
    </div>
  );
}
