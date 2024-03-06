import React from "react";
import Notification from "./notification";

const Notifications = () => {
  return (
    <div id="2">
      <div className="flex flex-col  items-start ">
        <Notification text="Receive periodic newsletter" />
        <Notification text="Email me the similar events in my area" />
      </div>
    </div>
  );
};

export default Notifications;
