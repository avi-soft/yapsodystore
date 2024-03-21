"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import styles from "./search.module.css";
import { getSearchEvents } from "@/helpers/api-utils";
import { useRouter } from "next/navigation";

const Search = ({
  color,
  textColor,
  buttonLinkBoxBorderColor,
  search,
  placeholderColor,
}) => {
  const inputStyle = {
    backgroundColor: color,
    color: textColor,
    borderColor: buttonLinkBoxBorderColor,
  };

  const [query, setQuery] = useState(search || "");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  const handleInputChange = useCallback((e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.length >= 3) {
        getSearchEvents(query)
          .then((data) => {
            setResults(data);
            setShowDropdown(true);
          })
          .catch(() => {
            setShowDropdown(false);
          });
      } else {
        setShowDropdown(false);
      }
    }, 500); // Debounce time in milliseconds

    return () => clearTimeout(timer);
  }, [query]);

  const handleSelectResult = useCallback(
    (id, name) => {
      router.push(`/?search=${name}`);
      setQuery(name);
      setShowDropdown(false);
    },
    [router]
  );

  const clearSearch = useCallback(() => {
    setQuery("");
    router.push(`/`);
  }, [router]);

  const dropdownContent = useMemo(() => {
    if (!results.length) {
      return (
        <div
          onClick={() => setShowDropdown(false)}
          className={`pb-1 px-1 border-2 cursor-pointer`}
        >
          {"Sorry, We could not find any event. Try something else."}
        </div>
      );
    }

    return results
      .filter((result) =>
        result.event_title1.toLowerCase().includes(query.trim())
      )
      .map((filterItems, index) => (
        <div
          key={index}
          className={`pb-1 px-1 border-2 cursor-pointer`}
          onClick={() =>
            handleSelectResult(filterItems.id, filterItems.event_title1)
          }
        >
          {filterItems.event_title1}
        </div>
      ));
  }, [results, query, handleSelectResult]);

  return (
    <div className="relative mb-[15px] mt-[18px]">
      <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
        <IoSearchSharp color={textColor} className={styles.icon} />
      </div>
      <style>
        {`
          #search-input::placeholder {
            color: ${placeholderColor};
          }
          #search-input:focus {
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
            0 0 8px rgba(102, 175, 233, 0.6);
          }
        `}
      </style>
      <input
        type="text"
        style={inputStyle}
        className={`h-[40px] border rounded-[5px] py-2 px-9 pr-10 focus:outline-none focus:border-blue-500`}
        placeholder="Search events"
        value={query}
        id="search-input"
        onChange={handleInputChange}
      />
      {query && (
        <button
          className="absolute inset-y-0 right-0 px-2 py-2"
          onClick={clearSearch}
        >
          <ImCross color={textColor} size={11} />
        </button>
      )}
      {showDropdown && !search && (
        <div
          className="max-h-25vh overflow-y-scroll rounded-[2px] mt-2 absolute w-[100%] z-50 text-base "
          style={inputStyle}
        >
          {dropdownContent}
        </div>
      )}
    </div>
  );
};

export default Search;
