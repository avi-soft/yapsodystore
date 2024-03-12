import React from "react";
import TabMenu from "./TabMenu";

const Tab = ({ user, email }) => {
  return (
    <div className="md:p-5 p-2 mx-auto ">
      <div
        role="tablist"
        className="tabs tabs-bordered grid-cols-[repeat(3,0fr)] justify-items-center gap-0"
      >
        <TabMenu
          label="My Account"
          tab={1}
          minWidth="min-w-[112px]"
          Focus={true}
          Style="pt-7 justify-self-start"
          user={user}
          email={email}
        />

        <TabMenu
          label="Notification"
          tab={2}
          minWidth="min-w-[108px]"
          Focus={false}
          Style="lg:p-5 pt-5 justify-self-start"
          user={user}
          email={email}
        />

        <TabMenu
          label="Booking History"
          tab={3}
          minWidth="min-w-[138px]"
          Focus={false}
          Style="my-6"
          user={user}
          email={email}
        />

        <span className="md:tab max-w-[160px] md:pr-[200px] sm:pr-[50px] sm:tab" />
      </div>
    </div>
  );
};

export default Tab;
