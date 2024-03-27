import React from "react";

const TicketDropdown = ({
  onChange,
  quantity = 10,
  classId,
  selectedTickets,
}) => {
  const options = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleChange = (event) => {
    onChange(parseInt(event.target.value), classId);
  };

  return (
    <div className="relative inline-block w-full">
      <select
        value={selectedTickets[classId] ? selectedTickets[classId] : "Select"}
        onChange={handleChange}
        className="border border-[#ccc] rounded-[2px] p-[0.3rem] focus:outline-none text-[12px] bg-transparent w-[102px] text-[#454444] pl-[6px]"
      >
        <option disabled value={"Select"}>
          Select
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center align-middle mr-4"></div>
    </div>
  );
};

export default TicketDropdown;
