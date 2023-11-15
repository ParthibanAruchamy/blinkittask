import React from "react";
import { Link } from "react-router-dom";
import HorizontalWrapper from "../horizontalWrapper";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./logo.module.scss";

function Logo({ className = "" }) {
  return (
    <HorizontalWrapper className={classNames(styles.logo, className)}>
      <Link to={"/"}>
        <img src="/logo.svg" alt="" />
      </Link>
    </HorizontalWrapper>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
