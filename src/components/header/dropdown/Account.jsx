import React from "react";
import Image from "next/image";
import Link from "next/link";

import boxOffice from "@/../public/assets/icons/two-tickets.png";
import profile from "@/../public/assets/icons/user.png";
import history from "@/../public/assets/icons/clock.png";
import support from "@/../public/assets/icons/help.png";
import logout from "@/../public/assets/icons/logout.png";

const accountOptions = [
  { label: "Box Office", img: boxOffice, link: "/presenter" },
  { label: "Profile Settings", img: profile, link: "/account" },
  { label: "Booking History", img: history, link: "/history" },
  { label: "Support", img: support, link: "/support" },
  { label: "Logout", img: logout, link: "/logout" },
];

const Account = () => {
  return (
    <>
      <div className="absolute right-11 mt-[10px]">
        <div
          style={{
            filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
          }}
          className="w-0 h-0 border-b-[10px] border-r-[10px] border-l-[10px] border-r-transparent border-l-transparent border-b-gray-300"
        ></div>
      </div>
      <ul
        className="absolute top-full right-0 -mr-4 mt-[19px] bg-white border border-gray-300 shadow-md grid grid-cols-1 rounded-md"
        style={{ minWidth: "230px" }}
      >
        {accountOptions.map((option, index) => (
          <li key={index + 100} className="p-2 py-4 truncate border text-black">
            <Link href={option.link}>
              <span className={`ml-3 flex items-center`}>
                <Image
                  src={option.img}
                  alt={option.label}
                  height={24}
                  width={24}
                  className="h-6 w-6 "
                />
                <span className="mx-4">{option.label}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Account;
