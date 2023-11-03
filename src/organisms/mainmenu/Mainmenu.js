import React from "react";
import { mainMenuItems } from "../../data/mainMenuItems";
import Menuitems from "../../molecules/menuitems";

export default function Mainmenu({ setselectedSubCategory }) {
  return (
    <div className="flex flex-row border-0 pl-40 border-t-2 border-b-2">
      {mainMenuItems.map((item, index) => (
        <Menuitems
          key={index}
          menu={item}
        />
      ))}
    </div>
  );
}
