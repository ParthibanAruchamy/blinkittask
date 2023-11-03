import React from "react";
import { TfiPlus, TfiMinus } from "react-icons/tfi";

export default function QuantityButton({
  count,
  setCount,
  addOrIncrease,
  removeOrDecrease,
}) {
  return (
    <div className="flex flex-col w-[70%] rounded-lg m-1.5 bg-green-700 text-white">
      <div className="flex items-center justify-around">
        <TfiMinus
          className="flex m-3 cursor-pointer"
          onClick={() => removeOrDecrease(setCount)}
        />
        <p className="font-bold text-sm text-left m-2">{count}</p>
        <TfiPlus
          className="flex m-3 cursor-pointer"
          onClick={() => addOrIncrease(setCount)}
        />
      </div>
    </div>
  );
}
