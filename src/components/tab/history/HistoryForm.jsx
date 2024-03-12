import React from "react";
import HistoryInput from "./HistoryInput";

function HistoryForm() {
  function updateData() {}
  return (
    <form className="report-options" id="customerReportForm" method="post">
      <div className="container-fluid">
        <div className="row">
          <div className="relative min-h-[1px] px-2.5 flex flex-wrap items-stretch justify-between mb-10">
            <div className="hidden md:block min-h-[1px] px-2.5 w-full xl:w-[35vw] mt-2">
              Booking History
            </div>
            <div>
              <HistoryInput id="payment_due" text="Payment Due" />
              <HistoryInput id="sale" text="Sale" />
              <HistoryInput id="refund" text="Return" />
            </div>
            <div className="mt-1.5">
              <select
                onChange={updateData}
                id="select-style-option "
                className="w-[188px] text-[#4e5665] px-2.5 py-[5px] bg-[#fdfdfd] border border-solid border-[#d7d7d7] text-xs rounded-[3px]  outline-none"
              >
                <option value="LF">Sort by Last to First</option>
                <option value="FL">Sort by First to Last</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default HistoryForm;
