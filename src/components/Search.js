import React, { useState } from "react";

import { createApi } from "unsplash-js";

import Image from "./Image";
import Form from "./Form";

const Search = () => {
  const api = createApi({
    accessKey: process.env.REACT_APP_ACCESS_KEY,
  });

  //STATES
  const [searchBoxText, setSearchBoxText] = useState({ text: "" });
  const [data, setPhotosResponse] = useState(null);

  //Log each keystroke and save the data
  function handleChange(event) {
    const { name, value } = event.target;
    setSearchBoxText((prevSearchBoxText) => {
      return {
        ...prevSearchBoxText,
        [name]: value,
      };
    });
  }
  console.log(searchBoxText);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchPhoto();
    }
  };
  //Search for photo after button is clicked
  function searchPhoto() {
    api.search
      .getPhotos({
        query: searchBoxText.text,

        perPage: 9,
        orientation: "landscape",
      })
      .then((result) => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.log("oops something went wrong!");
      });
  }

  if (data === null) {
    return (
      <div>
        <Form
          value={searchBoxText.text}
          handleChange={handleChange}
          handleKeyDown={handleKeyDown}
          handleClick={searchPhoto}
        />
      </div>
    );
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <Form
          value={searchBoxText.text}
          handleChange={handleChange}
          handleKeyDown={handleKeyDown}
          handleClick={searchPhoto}
        />

        <div className="feed">
          <ul className="column">
            {data.response.results.map((photo) => (
              <li key={photo.id} className="li">
                <Image photo={photo} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
};

export default Search;
