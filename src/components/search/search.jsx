"use client";
import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import styles from "./search.module.css";
import { getEventDetails } from "@/helpers/api-utils";
import { useEffect, useState } from "react";

const Search = ({ color, textColor, buttonLinkBoxBorderColor }) => {
  const inputStyle = {
    borderColor: color,
    backgroundColor: color,
    color: textColor,
    borderColor: buttonLinkBoxBorderColor,
  };

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  useEffect(() => {
    if (query.length >= 3) {
      getEventDetails(query)
        .then((data) => {
          setResults(data);
          setShowDropdown(true);
        })
        .catch((error) => {
          setShowDropdown(false);
        });
    } else {
      setShowDropdown(false);
    }
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="mb-6 w-[240px] max-sm:w-[100%]">
      <IoSearchSharp color={textColor} className={styles.icon} />
      <input
        style={inputStyle}
        type="search"
        name="search"
        id="search"
        className={`${styles.search} w-[100%]`}
        placeholder="Search Events"
        value={query}
        onChange={handleInputChange}
      />
      {showDropdown && (
        <div className="absolute bg-white w-[240px] border border-gray-200 shadow-md rounded-b-md z-10 max-sm:w-[88.5%]">
          {results
            ? results
                .filter((result) =>
                  result.event_title1.toLowerCase().includes(query)
                )
                .map((filterItems, index) => (
                  <div
                    key={index}
                    className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSelectResult(filterItems)}
                  >
                    {filterItems.event_title1}
                  </div>
                ))
            : ""}
        </div>
      )}
    </div>
  );
};

export default Search;
