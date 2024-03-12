import React from "react";

const PurchaserQuestionnaires = ({ question, color, index }) => {
  const cnt = 0;
  return (
    <div className="flex flex-col gap-2 mb-[15px]">
      <div className="flex gap-2 text-center items-center ">
        <div
          className="h-8 w-8 rounded-[16px] border-[4px] border-solid border-gray-300 text-center text-gray-300"
          style={{ backgroundColor: color }}
        >
          {index + 1}
        </div>
        <div className="flex">
          <span>
            <p>{question.question}</p>{" "}
          </span>
          <span>
            <p className="text-[red]">*</p>
          </span>
        </div>
      </div>
      <div>
        {question.responseType === "dropdown" ? (
          <select className="px-2 py-1 border-[2px] block h-[40px] w-[18%] rounded-[4px] border-[rgba(0,21,56,0.25)] text-[#555] shadow outline-none focus:border-[1px] focus:border-[rbga(81,203,238,1)] focus:shadow-[0px_0px_5px] focus:shadow-[#86e2ea] max-xl:w-[200px]">
            {question.options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        ) : (
          <input
            type={question.responseType}
            className="px-2 py-1 border-[2px] block h-[40px] w-[18%] rounded-[4px] border-[rgba(0,21,56,0.25)] text-[#555] shadow outline-none focus:border-[1px] focus:border-[rbga(81,203,238,1)] focus:shadow-[0px_0px_5px] focus:shadow-[#86e2ea] max-xl:w-[200px]"
            placeholder={`Enter ${question.question}`}
          ></input>
        )}
      </div>
    </div>
  );
};

export default PurchaserQuestionnaires;
