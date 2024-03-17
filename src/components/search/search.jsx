"use client";
import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import styles from "./search.module.css";
import { getEventDetails } from "@/helpers/api-utils";
import { useEffect, useState } from "react";

const Search = ({
  color,
  textColor,
  buttonLinkBoxBorderColor,
  onSearchSelect,
}) => {
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
      getEventDetails()
        .then((data) => {
          setResults(data);
          // console.log(results);
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

  const handleSelectResult = (result) => {
    setQuery("");
    setShowDropdown(false);
    onSearchSelect(result);
  };

  // const eventData = await getEventDetails()

  return (
    <div className="mb-6 mt-[18px] w-[100%]">
      <IoSearchSharp color={textColor} className={styles.icon} />
      <input
        style={inputStyle}
        type="search"
        name="search"
        id="search"
        className={`${styles.search} w-[100%] placeholder-[#54585c] `}
        placeholder="Search events"
        value={query}
        onChange={handleInputChange}
      />
      {showDropdown && (
        <div
          className="absolute border-[2px] bg-white w-[340px]  border-gray-200 shadow-md rounded-md z-10 max-sm:w-[84%]"
          style={{ borderColor: buttonLinkBoxBorderColor }}
        >
          {results
            ? results
                .filter((result) =>
                  result.event_title1.toLowerCase().includes(query.trim())
                )
                .map((filterItems, index) => (
                  <div
                    key={index}
                    className={`pb-1 px-1 border-2 cursor-pointer hover:bg-gray-100 `}
                    onClick={() => handleSelectResult(filterItems.id)}
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
