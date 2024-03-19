import React from "react";

const HistoryInput = ({ id, text }) => {
  function updateData() {}
  let name = `filter[${id}]`;
  return (
    <label className=" sm:pl-2.5 text-left text-[#4e5665] uppercase inline-block mt-2 cursor-pointer min-h-5 mr-5 max-w-full mb-1">
      <input
        name={name}
        value="Y"
        defaultChecked
        onChange={updateData}
        id={id}
        type="checkbox"
        className="align-middle h-5 w-5 checkbox checked:[--chkbg:#9da7b9] text-xs border border-solid border-[#9da7b9]  top-0 left-0 rounded  "
      />
      <span className="align-middle text-sm ml-1">{text}</span>
    </label>
  );
};

export default HistoryInput;
