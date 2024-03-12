import React from "react";
import CheckBox from "@/ui/CheckBox";
import Link from "next/link";
import RadioButton from "@/ui/RadioButton";

const GeneralInstructions = ({ color }) => {
  return (
    <div>
      <div className="mb-[10px] mt-[15px] rounded-[6px]">
        <div>
          <h3 className="mb-[20px] text-[22px] font-[600] tracking-wide text-[rgba(51,51,51,0.7)] ">
            How do you want to recieve your tickets?
          </h3>
          <div className="ml-[14px] flex gap-4">
            <label
              class="relative flex items-center rounded-full cursor-pointer"
              htmlFor=""
              data-ripple-dark="true"
            >
              <RadioButton color={color} checked={true} />
            </label>
            <span className="text-[18px]">Print/Email</span>
          </div>
        </div>
      </div>
      <div>
        <div className="mb-[5px] mt-[25px] inline-flex cursor-pointer items-center">
          <label
            className="relative flex items-center p-3 rounded-full cursor-pointer"
            htmlFor="check"
            data-ripple-dark="true"
          >
            <CheckBox id={"check"} color={color} checked={true} />
          </label>
          <label
            className="cursor-pointer select-none font-light text-gray-700"
            htmlFor="check"
          >
            Yapsody may notify me of special offers and events in my area
          </label>
        </div>
        <div className="mb-[5px] flex cursor-pointer">
          <label
            className="relative flex items-center p-3 rounded-full cursor-pointer"
            htmlFor="check"
            data-ripple-dark="true"
          >
            <CheckBox id={"check1"} color={color} checked={true} />
          </label>

          <label
            className="mt-[12px] cursor-pointer select-none font-light text-gray-700"
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
                style={{ color: color }}
              >
                Terms & Conditions
              </Link>
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
