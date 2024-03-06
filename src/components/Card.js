import React from "react";

function Card({ isCodeAvailable = true }) {
  return (
    <div className="bg-white border rounded text-slate-500 border-blue-600">
      <div className="lg:grid grid-cols-3 gap-4 items-center">
        <div className="border-r text-center py-5">
          <h4 className="text-[20px] mb-2">2024-04-8</h4>
          <p className="text-base">16:00</p>
        </div>
        <div className="text-center text-slate-500">
          <p>Sale Ends</p>
          <div className="text font-medium">41 Days 4 hours</div>
        </div>
        <div className="text-center text-[12px] text-slate-500 py-5">
          {isCodeAvailable && (
            <div className="mb-2">
              <input
                className="transition-all border rounded-lg focus:outline-blue-300 text-center w-[150px] h-[35px]"
                type="text"
                name=""
                id=""
                placeholder="Enter a code"
              />
            </div>
          )}
          <div>
            <button class="bg-purple-400 text-lg text-white py-2 px-4 rounded">
              {isCodeAvailable ? "Get Access" : "Get Ticket"}
            </button>
          </div>

          <div className="mt-2">Starting from</div>

          <span>$50.00</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
