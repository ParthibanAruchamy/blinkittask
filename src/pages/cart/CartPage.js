import React from "react";
import { useSelector } from "react-redux";
import CartTile from "../../molecules/carttile/CartTile";
import { useNavigate } from "react-router-dom";
import { findTotal, getTotalQuantity } from "../../helper/cartHelper";

export default function CartPage() {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const goToShopping = () => navigate("/products");

  return (
    <>
    <div>
        <p className="font-bold m-5 pl-10 text-xl text-gray-500">Place Order</p>
        <p className="font-bold m-5 mb-0 pl-10 text-sm">Delivery in 10 Minutes</p>
        <p className="font-bold m-5 mt-0 pl-10 text-sm text-gray-500">{getTotalQuantity(cart)} Items</p>
    </div>
      {cart?.length > 0 ? ( 
        <div className="flex flex-col">
          {cart.map((item, index) => (
            <CartTile product={item} key={index} />
          ))}
          {findTotal(cart) > 0 && (
            <div className="flex border-t-2 justify-end">
              Total Price: {findTotal(cart).toFixed(2)}
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col w-[50%] text-center justify-center">
          <img
            className="w-40 aspect-square"
            src="https://cdn.grofers.com/assets/ui/empty_states/emp_empty_cart.png"
            alt=""
          />
          <h1 className="font-bold mt-2 text-md">
            You don't have any items in your cart
          </h1>
          <h3 className="font-bold mt-2 text-md">
            Your favourite items are just a click away
          </h3>
          <button
            className="mt-5 bg-green-700 rounded-md text-xs text-white px-4 py-2"
            onClick={goToShopping}
          >
            Start Shopping
          </button>
        </div>
      )}
    </>
  );
}
