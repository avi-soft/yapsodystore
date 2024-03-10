import React from "react";

const UserEmail = () => {
  return (
    <form className="rounded-[6px] py-[10px]">
      <div className="ml-[-10px] mr-[-10px] w-[70%]">
        <div className="relative min-h-[1px] w-[100%] pl-[10px] pr-[10px]">
          <div className="mb-[15px]">
            <label className="mb-[5px] inline-block max-w-[100%] text-[14px] font-normal tracking-wide text-[rgba(1,22,56,0.7)]">
              Email Address
            </label>
            <span className="text-[red]">*</span>
            <input className="focus:  block h-[34px] w-[100%] rounded-[4px] border-[1px] border-[rgba(0,21,56,0.25)] bg-[#fff] px-[12px] py-[6px] text-[14px] text-[#555] shadow outline-none transition-all duration-300 ease-in-out focus:border-[1px] focus:border-[rbga(81,203,238,1)] focus:shadow-[0px_0px_5px] focus:shadow-[#86e2ea]"></input>
          </div>
          <div className="mb-[15px]">
            <label className="mb-[5px] inline-block max-w-[100%] text-[14px] font-normal tracking-wide text-[rgba(1,22,56,0.7)]">
              Re-enter Email Address
            </label>
            <span className="text-[red]">*</span>
            <input className="focus:  block h-[34px] w-[100%] rounded-[4px] border-[1px] border-[rgba(0,21,56,0.25)] bg-[#fff] px-[12px] py-[6px] text-[14px] text-[#555] shadow outline-none focus:border-[1px] focus:border-[rbga(81,203,238,1)] focus:shadow-[0px_0px_5px] focus:shadow-[#86e2ea]"></input>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UserEmail;
