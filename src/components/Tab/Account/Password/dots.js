import React from "react";

const Dots = () => {
  return (
    <span
      id="dots"
      className=" pl-3 mb-[30px] mt-1 pt-1.5 inline-block w-[70px] "
    >
      <div className="h-2 w-2 rounded-full  bg-black inline-block relative"></div>
      <div className="h-2 w-2 rounded-full ml-1 bg-black inline-block relative"></div>
      <div className="h-2 w-2 rounded-full ml-1 bg-black inline-block relative"></div>
      <div className="h-2 w-2 rounded-full ml-1 bg-black inline-block relative"></div>
      <div className="h-2 w-2 rounded-full ml-1 bg-black inline-block relative"></div>
    </span>
  );
};

export default Dots;
