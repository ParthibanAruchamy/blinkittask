import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import HorizontalWrapper from "../horizontalWrapper";
import Input from "../input";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./searchBox.module.scss";

function SerachBox({ className = "" }) {
  return (
    <HorizontalWrapper className={classNames(styles.main, className)}>
      <>
        <AiOutlineSearch className={classNames(styles.icon, className)} />
        <Input
          type="text"
          placeholder='Search "products"'
          className={classNames(styles.inputBox, className)}
        />
      </>
    </HorizontalWrapper>
  );
}

SerachBox.propTypes = {
  className: PropTypes.string,
};

export default SerachBox;
