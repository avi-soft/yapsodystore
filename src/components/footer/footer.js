import React from "react";
import Link from "next/link";

import styles from "./footer.module.css";
import Item from "./item";

const Footer = () => {
  const flexRow = "flex flex-row";
  return (
    <div
      className={`border-t border-solid border-gray-300 !bg-white w-full h-14 text-base ${styles.footer}`}
    >
      <div className={`float-left ${flexRow} p-4 ${styles.list}`}>
        <ul className={`${flexRow} flex-wrap gap-4`}>
          <Item text="Support" link="/support" hide={false} />
          <Item text="Terms" link="/terms" hide={false} />
          <Item text="Privacy" link="/privacy" hide={false} />
          <Item text="Sell Tickets Online" link="/sell" hide={true} />
          <Item text="Discover Events" link="/discover" hide={false} />
        </ul>
      </div>
      <div className={`float-right ${flexRow} p-4 ${styles.list}`}>
        <p className="cursor-pointer">
          <Link href={"/"}> © 2024 Yapsody LLC All Rights Reserved</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
