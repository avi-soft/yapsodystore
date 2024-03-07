import React from "react";

const BoxContainer = ({ children1, children2, color }) => {
  return (
    <div
      className={`ml-auto mr-auto w-[100%] rounded-[8px]`}
      style={{ background: color ? color : "none" }}
    >
      <div className="flex pb-10 pl-4 pr-4 pt-12 max-xl:block">
        {children1}
        {children2}
      </div>
    </div>
  );
};

export default BoxContainer;
