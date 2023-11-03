import React from "react";
import { AiOutlineSearch } from "react-icons/ai";


export default function SerachBox() {
  return (
    <div className="flex flex-row items-center ml-5">
      <AiOutlineSearch />
      <input type="text" placeholder='Search "products"' className="border-2 ml-1"></input>
    </div>
  );
}
