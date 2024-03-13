import React from "react";
import LoadingIcon from "./loadingg";

const Loading = () => {
  return (
    <div className="relative z-10">
      <div className=" absolute min-w-[100vw] flex items-center justify-center min-h-screen inset-0 bg-black bg-opacity-30">
        <LoadingIcon />
      </div>
    </div>
  );
};

export default Loading;
