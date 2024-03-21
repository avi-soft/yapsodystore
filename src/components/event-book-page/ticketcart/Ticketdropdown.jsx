import React from "react";

const TicketDropdown = ({ onChange, quantity = 10 }) => {
  const options = Array.from({ length: parseInt(quantity) }, (_, i) => i + 1);

  const handleChange = (event) => {
    onChange(parseInt(event.target.value), 10);
  };

  return (
    <div className="relative inline-block w-full ">
      <select
        value={"Select"}
        onChange={handleChange}
        className="border border-[#ccc] rounded-[2px] p-[0.3rem] focus:outline-none focus:ring-1 focus:ring-indigo-500 text-[12px] bg-transparent w-[102px] text-[#454444] pl-[6px]"
      >
        <option disabled value={"Select"}>
          Select
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option} Ticket{option === 1 ? "" : "s"}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center align-middle mr-4"></div>
    </div>
  );
};

export default TicketDropdown;
