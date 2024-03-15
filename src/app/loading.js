import React from "react";
import LoadingIcon from "../ui/LoadingIcon";
import { getThemeData } from "@/helpers/api-utils";
const Loading = async () => {
  const { buttonLinkBoxBorderColor} = await getThemeData();
  return (
    <div className="relative z-10">
      <div className=" absolute flex items-center justify-center min-h-screen inset-0 bg-slate-200/50">
        <LoadingIcon color={buttonLinkBoxBorderColor} />
      </div>
    </div>
  );
};

export default Loading;
