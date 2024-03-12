import React from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

const HistoryTable = () => {
  const row10 = "float-left w-[10%] py-4 px-2.5";
  const row20 = "float-left w-[20%] py-4 px-2.5";
  return (
    <div className="min-w-[880px] relative pt-14">
      <TableHead row10={row10} row20={row20} />
      <div className="js-booking-history-container ">
        <div className="overflow-auto max-h-[500px]">
          <TableRow row10={row10} row20={row20} />
        </div>
      </div>
    </div>
  );
};

export default HistoryTable;
