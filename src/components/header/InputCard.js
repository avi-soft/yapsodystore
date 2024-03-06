import React from "react";

function InputCard() {
  return (
    <div>
      <div className="">
        <input
          className="transition-all border rounded-lg focus:outline-blue-300  text-center w-[150px] h-[35px]"
          type="text"
          name=""
          id=""
          placeholder="Enter a code"
        />
      </div>
      <div className="border-r h-3 mr-[75px]"></div>
      <div>
        <button className="bg-purple-400 text-lg text-white w-[170px] py-2 px-4 rounded">
          Get Access
        </button>
      </div>
    </div>
  );
}

export default InputCard;
