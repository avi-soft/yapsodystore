import React from "react";
import HistoryForm from "./HistoryForm";
import HistoryTable from "./HistoryTable";

const History = () => {
  return (
    <div
      id="booking-history"
      className="relative xl:w-[1160px] lg:w-[990px] md:w-[740px] sm:w-[600px] w-[95vw]  text-left overflow-auto border border-solid border-[#d7d7d7] p-5 rounded-[3px]"
    >
      <HistoryForm />
      <HistoryTable />
    </div>
  );
};

export default History;
