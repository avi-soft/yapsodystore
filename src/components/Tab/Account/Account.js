import React from "react";
import InfoBox from "./InfoBox";
import PasswordBox from "./Password/PasswordBox";

const Account = ({ user, email }) => {
  return (
    <div id="1">
      <InfoBox info="user" user={user} email={email} />
      <InfoBox info="email" user={user} email={email} />
      <PasswordBox />
    </div>
  );
};

export default Account;
