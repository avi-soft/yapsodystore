import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import styles from "./search.module.css";

const Search = ({ color, textColor, buttonLinkBoxBorderColor }) => {
  const inputStyle = {
    borderColor: color,
    backgroundColor: color,
    color: textColor,
    borderColor: buttonLinkBoxBorderColor,
  };
  return (
    <div className="mb-6 max-sm:w-[100%]">
      <IoSearchSharp color={textColor} className={styles.icon} />
      <input
        style={inputStyle}
        type="search"
        name="search"
        id="search"
        className={`${styles.search} w-fit max-sm:w-[100%]`}
        placeholder="Search Events"
      />
    </div>
  );
};

export default Search;
