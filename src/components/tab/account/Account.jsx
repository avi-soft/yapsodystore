import React from "react";
import EmailBox from "./EmailBox";
import InfoBox from "./helpers/InfoBox";

const Account = ({ user, email }) => {
  return (
    <div id="1">
      <InfoBox type="user" user={user} />
      <EmailBox email={email} />
      <InfoBox type="password" user={user} />
    </div>
  );
};

export default Account;
