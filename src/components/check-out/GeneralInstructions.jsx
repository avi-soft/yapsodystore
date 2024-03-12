import React from "react";
import CheckBox from "@/ui/CheckBox";
import Link from "next/link";

const GeneralInstructions = ({ color }) => {
  return (
    <div>
      <div className="mb-[10px] mt-[15px] rounded-[6px]">
        <div>
          <h3 className="mb-[20px] text-[22px] font-[600] tracking-wide text-[rgba(51,51,51,0.7)] ">
            How do you want to recieve your tickets?
          </h3>
          <div className="mr-[15px] flex gap-1">
            <label className="relative mb-[5px] min-h-[20px] max-w-[100%] cursor-pointer pl-[25px] text-[14px] font-normal text-[rgba(1,22,56,0.7)]"></label>
            <input
              type="radio"
              className="absolute mt-[3px] size-4 h-[20px] w-[20px] border-2 border-solid border-[var(--highlightColor)] bg-[var(--highlightColor)] text-[var(--highlightColor)] shadow-[0px_2px_4px_0px_rgba(0,0,0,0,0.12)]"
              defaultChecked
            ></input>
            <span className="text-[18px]">Print/Email</span>
          </div>
          <div></div>
        </div>
      </div>
      <div>
        <div className="mb-[5px] mt-[25px] inline-flex cursor-pointer items-center">
          <CheckBox id={"check"} color={color} />
          <label
            className="mt-px cursor-pointer select-none font-light text-gray-700"
            htmlFor="check"
          >
            Yapsody may notify me of special offers and events in my area
          </label>
        </div>
        <div className="mb-[5px] flex cursor-pointer">
          <CheckBox id={"check1"} color={color}  />
          <label
            className="mt-[8px] cursor-pointer select-none font-light text-gray-700"
            htmlFor="check1"
          >
            Presenter may notify me of special offers and events
          </label>
        </div>
        <div className="mb-[5px] mt-[20px] border-b">
          <p className="mb-[10px] text-[14px] font-normal text-[rgba(1,22,56,0.7)]">
            <span className="">
              By continuing, you agree to Yapsody
              <Link
                href={"https://staging.yapsody.com/ticketing/terms-of-use/"}
                className="underline"
                style={{color: color}}
              >
                Terms & Conditions
              </Link>{" "}
              and acknowledge that merchants/presenters set their own refund
              policies.
            </span>
            <span>Payments securely processed throughYapSecure</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneralInstructions;
