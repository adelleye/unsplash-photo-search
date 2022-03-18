import React, { Fragment } from "react";

const Image = ({ photo }) => {
  const { user, urls } = photo;

  return (
    <div>
      <Fragment>
        <img className="img" src={urls.regular} />
        <a
          className="credit"
          target="_blank"
          href={`https://unsplash.com/@${user.username}`}
        >
          {user.name}
        </a>
      </Fragment>
    </div>
  );
};

export default Image;
