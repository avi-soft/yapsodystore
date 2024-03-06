import React from "react";
import Image from "next/image";

import searchImg from "@/../public/icons/magnifying-glass-solid.svg";
import styles from "./search.module.css";

const Search = () => {
  return (
    <div className=" mt-16 mb-6 w-fit">
      <Image src={searchImg} alt="search" className={styles.icon} />
      <input
        type="search"
        name="search"
        id="search"
        className={`${styles.search} md:w-[250px] w-fit`}
        placeholder="Search Events"
      />
    </div>
  );
};

export default Search;
