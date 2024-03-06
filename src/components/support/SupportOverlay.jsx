import React from "react";

const SupportOverlay = ({ isOpen, children }) => {
  return (
    <>
      {isOpen ? (
        <div>
          <div className="z-8 fixed cursor-pointer bg-black/[.5]" />
          <div className="fixed left-[150px] mt-[-270px] z-10 h-fit max-w-[300px] bg-white">
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SupportOverlay;
