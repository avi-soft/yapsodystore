import React from "react";

import { LiaAngleDownSolid } from "react-icons/lia";
import { LiaAngleUpSolid } from "react-icons/lia";

const Arrows = ({ type }) => {
  return (
    <>
      <LiaAngleDownSolid
        className="ml-[2px] h-3 w-3 down"
        id={`down-${type}`}
      />
      <LiaAngleUpSolid
        className="ml-[2px] h-3 w-3 mt-1 hidden up"
        id={`up-${type}`}
      />
    </>
  );
};

export default Arrows;