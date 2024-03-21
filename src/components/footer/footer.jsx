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
      className={`border-t  font-lato min-h-[57.65px] bottom-0 mt-auto border-solid px-2 border-gray-300 !bg-white  text-[#454444] w-full  text-base ${styles.footer}`}
    >
      <div className={`float-left    ${flexRow} p-[17px] ${styles.list}`}>
        <ul className={`${flexRow} justify-center flex-wrap gap-[15px] `}>
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
      <div className={`float-right ${flexRow} p-[17px] ${styles.list}`}>
        <p className="cursor-pointer">
          <Link href={portalUrl}>
            © {currentYear} {companyName} All Rights Reserved
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
