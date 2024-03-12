import React from "react";

const PurchaserQuestionnaires = ({ question }) => {
  return (
    <div className="text-[var(--text-primary)]">
      <div className="flex gap-4">
        <div className="h-6 w-6 rounded-[12px] border border-solid bg-[var(--highlightColor)]">
          1
        </div>
        <div>
          <p>{question.question}</p>
        </div>
      </div>
      <div>
        {question.responseType === "dropdown" ? (
          <select>
            <option>male</option>
            <option>female</option>
            <option>others</option>
          </select>
        ) : (
          <input type={question.responseType}></input>
        )}
      </div>
    </div>
  );
};

export default PurchaserQuestionnaires;
