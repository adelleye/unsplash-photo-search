import React from "react";

const Form = (props) => {
  return (
    <div className="search">
      <input
        type="text"
        className="search--text"
        placeholder="Search for high res. photos"
        name="text"
        value={props.value.text}
        onChange={props.handleChange}
        onKeyDown={props.handleKeyDown}
      ></input>
      <button className="search--button" onClick={props.handleClick}>
        Search
      </button>
    </div>
  );
};

export default Form;
