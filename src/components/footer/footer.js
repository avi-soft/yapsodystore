import React from "react";
import Link from "next/link";

import styles from "./footer.module.css";
import Item from "./item";

const Footer = ({
  supportUrl,
  termsUrl,
  privacyUrl,
  portalUrl,
  companyName,
  sellTicketUrl,
}) => {
  const flexRow = "flex flex-row";
  const currentYear = new Date().getFullYear();
  return (
    <div
      className={`border-t border-solid border-gray-300 !bg-white w-full h-14 text-base ${styles.footer}`}
    >
      <div className={`float-left ${flexRow} p-4 ${styles.list}`}>
        <ul className={`${flexRow} flex-wrap gap-4`}>
          <Item text="Support" link={supportUrl} hide={false} />
          <Item text="Terms" link={termsUrl} hide={false} />
          <Item text="Privacy" link={privacyUrl} hide={false} />
          <Item text="Sell Tickets Online" link={sellTicketUrl} hide={true} />
          <Item
            text="Discover Events"
            link="https://yapsody.events/?utm_source=onlinestore&utm_medium=ticketing&utm_campaign=footer"
            hide={false}
          />
        </ul>
      </div>
      <div className={`float-right ${flexRow} p-4 ${styles.list}`}>
        <p className="cursor-pointer">
          <Link href={portalUrl}>
            {" "}
            © {currentYear} {companyName} All Rights Reserved
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
