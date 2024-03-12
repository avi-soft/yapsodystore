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
    <div className="mb-6 w-fit">
      <IoSearchSharp color={textColor} className={styles.icon} />
      <input
        style={inputStyle}
        type="search"
        name="search"
        id="search"
        className={`${styles.search} md:w-[277px] w-fit`}
        placeholder="Search Events"
      />
    </div>
  );
};

export default Search;
