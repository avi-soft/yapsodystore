import React from "react";
import Image from "next/image";

import searchImg from "@/../public/icons/magnifying-glass-solid.svg";
import styles from "./search.module.css";

const Search = ({ color }) => {
  return (
    <div className="mb-6 w-fit">
      <Image src={searchImg} alt="search" className={styles.icon} />
      <input
        style={{ borderColor: color, backgroundColor: color }}
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
