import React from "react";
import LoadingIcon from "../ui/LoadingIcon";
import { getThemeData } from "@/helpers/api-utils";

const Loading = async () => {
  // Get the border color from the theme
  const { buttonLinkBoxBorderColor } = await getThemeData();

  // Return the loading component
  return (
    <div className="relative z-10">
      {/* Loading overlay */}
      <div className="absolute flex items-center justify-center min-h-screen inset-0 bg-slate-200/50">
        {/* Loading icon */}
        <LoadingIcon
          className="animate-spin"
          color={buttonLinkBoxBorderColor}
        />
      </div>
    </div>
  );
};

export default Loading;
