import React from "react";

const TicketDropdown = ({ onChange }) => {
  
  const options = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleChange = (event) => {
    onChange(parseInt(event.target.value), 10); 
  };

  return (
    <div className="relative inline-block w-full">
      <select
        value={"Select"}  
        onChange={handleChange}
        className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      >
        <option disabled value={"Select"}>Select</option> 
        {options.map((option) => (
          <option key={option} value={option}>
            {option} Ticket{option === 1 ? "" : "s"}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center align-middle mr-4">
        
      </div>
    </div>
  );
  
};

export default TicketDropdown;
