import React from "react";
// import { removeItem } from '../../Redux/cartSlice';
import { useDispatch } from "react-redux";
import { increaseCount, decreaseCount } from "../../helper/cartHelper";
import { TfiMinus, TfiPlus } from "react-icons/tfi";
import { removeItem } from "../../stores/cart";

function CartTile({ product }) {

    console.log(product);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex items-center mx-8 px-6 py-5">
        <div className="flex w-2/5">
          <div className="w-20">
            <img className="h-24" src={product?.productImage} alt="" />
          </div>
          <div className="flex flex-col justify-between ml-4 flex-grow">
            <p className="text-sm">{product?.productName}</p>
            <p className="text-sm">{product?.productQuantity}</p>
            <p className="text-sm"><span className="font-bold">{product?.sellingPrice}</span> <span className="line-through">{product?.actualPrice} </span></p>
          </div>
        </div>
        <div className="flex justify-center">
          <TfiMinus
            className="flex m-3 cursor-pointer hover:bg-red-600 hover:text-white"
            onClick={() => decreaseCount(product, product.quantity, dispatch)}
          />
          <input
            className="mx-2 border text-center w-8"
            type="text"
            value={product?.quantity}
          />
          <TfiPlus
            className="flex m-3 cursor-pointer hover:bg-red-600 hover:text-white"
            onClick={() => increaseCount(product, product.quantity, dispatch)}
          />
        </div>
        <span className="text-center w-1/5 font-semibold text-sm">
          {product?.sellingPrice.toFixed(2)}
        </span>
        <span className="text-center w-1/5 font-semibold text-sm">
          {(product?.sellingPrice * product?.quantity).toFixed(2)}
        </span>
      </div>
    </>
  );
}

export default CartTile;
