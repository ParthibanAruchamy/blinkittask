import React from "react";
import PropTypes from "prop-types";
import Text from "../../atoms/text/Text";
import HorizontalWrapper from "../../atoms/horizontalWrapper/HorizontalWrapper";
import classNames from "classnames";
import styles from "./mainMenuItems.module.scss";

function MainMenuItems({
  className = "",
  mainCategory,
  selectedMainCategory,
  setSelectedMainCategory,
}) {
  return (
    <HorizontalWrapper
      onClick={() => setSelectedMainCategory(mainCategory?.id)}
    >
      <Text
        className={classNames(
          styles.mainMenuItems,
          `${selectedMainCategory === mainCategory.id ? styles.selected : ""}`,
          className
        )}
        value={mainCategory?.categoryName}
      />
    </HorizontalWrapper>
  );
}

MainMenuItems.propTypes = {
  className: PropTypes.string,
  mainCategory: PropTypes.object,
  onClick: PropTypes.func,
};

export default MainMenuItems;
