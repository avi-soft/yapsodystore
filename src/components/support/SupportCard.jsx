import React from "react";

const SupportCard = () => {
  return (
    <div className="flex-col gap-2 rounded-[4px] border p-3 shadow-md">
      <div className="rounded border border-[var(--highlightColor)] p-2 hover:bg-[var(--highlightColor)] hover:text-white">
        <h2 className="font-bold">Technical Support</h2>
        <ul className="ml-5 list-disc">
          <li>Trouble purchasing/receiving /reprinting tickets</li>
          <li>Online payment issues</li>
          <li>Report abuse / fraud</li>
        </ul>
      </div>
      <div className="mt-[10px] rounded border border-[var(--highlightColor)] p-2 hover:bg-[var(--highlightColor)] hover:text-white">
        <h2 className="font-bold">Non-technical Support</h2>
        <ul className="ml-5 list-disc">
          <li>Venue / Event information</li>
          <li>Refunds & exchanges</li>
        </ul>
      </div>
    </div>
  );
};

export default SupportCard;
