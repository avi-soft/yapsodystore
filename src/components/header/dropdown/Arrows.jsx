import React from "react";

import Image from "next/image";
import arrowDown from "@/../public/assets/icons/angle-down-solid.svg";
import arrowUp from "@/../public/assets/icons/angle-up-solid.svg";

const Arrows = ({ type }) => {
  return (
    <>
      <Image
        className="pt-1 h-5 w-5 down"
        src={arrowDown}
        height="auto"
        width="auto"
        id={`down-${type}`}
        alt="dropdown arrow"
      />
      <Image
        className="hidden pt-1 h-5 w-5 up"
        id={`up-${type}`}
        src={arrowUp}
        height="auto"
        width="auto"
        alt="dropdown arrow"
      />
    </>
  );
};

export default Arrows;
