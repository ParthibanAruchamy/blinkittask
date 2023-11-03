import React from 'react'
import Logo from '../../atoms/logo'
import HorizontalWrapper from '../../atoms/horizontalWrapper'
import VerticalWrapper from '../../atoms/verticalWrapper'
import SearchBar from '../../molecules/searchbar/SearchBar'
import Cart from '../../molecules/cart'

export default function Header() {
  return (
          <HorizontalWrapper>
            <Logo />
            <SearchBar />
            <Cart />
          </HorizontalWrapper>
  )
}
