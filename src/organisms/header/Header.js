import React from "react";
import Logo from "../../atoms/logo";
import HorizontalWrapper from "../../atoms/horizontalWrapper";
import SearchBar from "../../molecules/searchbar/SearchBar";
import MyCart from "../../molecules/myCart";

export default function Header() {
  return (
    <HorizontalWrapper>
      <>
        <Logo />
        <SearchBar />
        <MyCart />
      </>
    </HorizontalWrapper>
  );
}
