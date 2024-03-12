import React from "react";

const TableRow = ({ row10, row20 }) => {
  const data = {
    id: "FT65e57b65882d1",
    type: "Pay Later",
    timestamp: "Mar 4, 2024, 01:12 PM (IST)",
    user: "test test",
    amount: "Rs0.00",
    venue: "test",
    location: "Boxoffice",
  };
  return (
    <div className=" text-sm text-[#5a6167] cursor-pointer">
      <div className={row20}>{data.id}</div>

      <div className={row10}>{data.type}</div>

      <div className={row20}>{data.timestamp}</div>

      <div className={row20}>{data.user}</div>

      <div className={row10}>{data.amount}</div>

      <div className={row10}>{data.venue}</div>

      <div className={row10}>{data.location}</div>
    </div>
  );
};

export default TableRow;
