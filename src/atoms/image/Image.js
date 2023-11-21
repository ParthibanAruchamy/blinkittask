import React from "react";
import PropTypes from "prop-types";

function Image({className="", imageUrl=""}) {
  return (
    <div className={className}>
      <img className={className} src={imageUrl} alt="" />
    </div>
  );
}

Image.propTypes = {
    className: PropTypes.string,
    imageUrl: PropTypes.string,

};

export default Image;
