import React, { useState } from "react";

import { createApi } from "unsplash-js";

import Image from "./Image";

const Search = () => {
  console.log(process.env.REACT_APP_ACCESS_KEY);

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

  //Search for photo after button is clicked
  function searchPhoto() {
    api.search
      .getPhotos({
        query: searchBoxText.text,
        page: 1,
        perPage: 3,
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
        <div className="search">
          <input
            type="text"
            className="search--text"
            placeholder="text"
            name="text"
            value={searchBoxText.text}
            onChange={handleChange}
          ></input>
          <button className="search--button" onClick={searchPhoto}>
            Search
          </button>
        </div>
        Loading...
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
      <div className="search">
        <input
          type="text"
          className="search--text"
          placeholder="text"
          name="text"
          value={searchBoxText.text}
          onChange={handleChange}
        ></input>
        <button className="search--button" onClick={searchPhoto}>
          Search
        </button>

        <div className="feed">
          <ul className="columnUl">
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
