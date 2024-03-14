import React from "react";
import LoadingIcon from "./loadingg";

const Loading = () => {
  return (
    <div className="relative z-10">
      <div className=" absolute flex items-center justify-center min-h-screen inset-0 bg-slate-200/50">
        <LoadingIcon />
      </div>
    </div>
  );
};

export default Loading;
