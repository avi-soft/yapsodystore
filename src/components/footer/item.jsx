import React from "react";
import Link from "next/link";
import styles from "./footer.module.css";

const Item = ({ text, link, hide }) => {
  return hide ? (
    <li className={`cursor-pointer flex ${styles.hide}`}>
      <span className="w-1.5 mr-3 h-1.5 rounded-full bg-[#d0d8e5] mt-1 inline-block self-center"></span>
      <Link href={link}> {text}</Link>
    </li>
  ) : (
    <li className={`cursor-pointer flex `}>
      {text !== "Support" && (
        <span className="w-1.5 mr-3 h-1.5 rounded-full bg-[#d0d8e5] mt-1 inline-block self-center"></span>
      )}

      <Link href={link}> {text}</Link>
    </li>
  );
};

export default Item;
