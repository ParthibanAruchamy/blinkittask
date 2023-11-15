import React from "react";
import PropTypes from 'prop-types';
import MainMenuItems from "../../molecules/mainMenuItems";
import { productItems } from "../../data/productItems";
import HorizontalWrapper from "../../atoms/horizontalWrapper";
import styles from './mainMenu.module.scss';

function MainMenu({selectedMainCategory, setSelectedMainCategory}) {
  return (
    <HorizontalWrapper className={styles.container}>
      {productItems.map((mainCategory, index) => (
        <MainMenuItems
          key={index}
          mainCategory={mainCategory}
          selectedMainCategory={selectedMainCategory}
          setSelectedMainCategory={setSelectedMainCategory}
        />
      ))}
    </HorizontalWrapper>
  );
}
MainMenu.propTypes = {
  selectedMainCategory: PropTypes.string,
  setSelectedMainCategory: PropTypes.string,
  }
  
  export default MainMenu;
  
