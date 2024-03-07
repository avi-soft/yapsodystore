import React from "react";

const TableHead = ({ row10, row20 }) => {
  const translate = "CI_ACCOUNT_HISTORY_table_head_transaction";
  return (
    <div className="absolute top-0 w-full text-sm text-[#232d35] border-b border-solid border-b-[#e2e5e7]">
      <div className={row20} translate={translate}>
        Transaction ID
      </div>
      <div className={row10} translate={translate}>
        Type
      </div>
      <div className={row20} translate={translate}>
        Date &amp; Time
      </div>
      <div className={row20} translate={translate}>
        Transacted By
      </div>
      <div className={row10} translate={translate}>
        Amount
      </div>
      <div className={row10} translate={translate}>
        Venue
      </div>
      <div className={row10} translate={translate}>
        Location
      </div>
    </div>
  );
};

export default TableHead;
