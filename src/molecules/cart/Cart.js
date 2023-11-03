import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { findTotal, getTotalQuantity } from "../../helper/cartHelper";

export default function Cart() {
  const [tolalCount, settolalCount] = useState(0);
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();


  useEffect(() => {
    settolalCount(getTotalQuantity(cart));
  }, [cart]);

  const handleNavigate = () => {
    if(cart.length > 0) {
        navigate("/cart") 
    } else {
        return;
    }
  };

  return (
    <div className="flex flex-1 justify-end pr-5 w-[100%] h-[100%]" onClick={()=>handleNavigate()}>
      <div className="flex flex-row  bg-green-700 rounded-lg m-6 p-2 text-white items-center">
        <AiOutlineShoppingCart className="text-4xl" />
        {tolalCount ? (
          <div className="text-white flex flex-col px-3 w-[100%]">
            <p className="font-bold">{tolalCount} Items</p>
            <div className="flex flex-row items-center">
              <BiRupee className="font-bold" />
              <p className="font-bold">{findTotal(cart)}</p>
            </div>
          </div>
        ) : (
          <div className="text-white flex flex-col px-3 py-3 w-[100%]">
            <p className="font-bold">My Cart</p>
          </div>
        )}
      </div>
    </div>
  );
}
