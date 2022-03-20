import React, { Fragment } from "react";

const Image = ({ photo }) => {
  const { user, urls } = photo;

  return (
    <div className="image--container">
      <img className="img" src={urls.regular} />
    </div>
  );
};

export default Image;
