import React from "react";

const SupportOverlay = ({ isOpen, children }) => {
  return (
    <>
      {isOpen ? (
          <div className="absolute  ">
            {children}
          </div>
        
      ) : null}
    </>
  );
};

export default SupportOverlay;
