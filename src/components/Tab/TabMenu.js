"use client";

import React from "react";
import Account from "./Account/Account";
import Notifications from "./Notification/Notifications";
import History from "./History/History";

const TabMenu = ({ label, tab, minWidth, Focus, Style, user, email }) => {
  function handleFocus(event) {
    event.target.style.cursor = "default";
  }
  function handleBlur(event) {
    event.target.style.cursor = "pointer";
  }

  return (
    <>
      {Focus ? (
        <input
          id={tab}
          type="radio"
          name="my_tabs_1"
          role="link"
          className={`tab sm:min-w-[168px] ${minWidth}  md:text-lg w-fit text-sm md:pb-[45px] pb-6 text-gray-600 cursor-default focus:text-black focus:outline-none`}
          aria-label={label}
          onFocus={handleFocus}
          onBlur={handleBlur}
          defaultChecked
          autoFocus
        />
      ) : (
        <input
          id={tab}
          type="radio"
          name="my_tabs_1"
          role="link"
          className={`tab sm:min-w-[168px] ${minWidth}  md:text-lg w-fit text-sm md:pb-[45px] pb-6 text-gray-600  focus:text-black focus:outline-none`}
          aria-label={label}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      )}

      <div role="tabpanel" className={`tab-content ${Style}`}>
        {tab === 1 ? (
          <Account user={user} email={email} />
        ) : tab === 2 ? (
          <Notifications />
        ) : (
          <History />
        )}
      </div>
    </>
  );
};

export default TabMenu;
