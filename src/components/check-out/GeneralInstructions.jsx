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
          <div className="mr-[15px] flex gap-2">
            <RadioButton color={color} checked={true} />
            <span className="text-[18px] text-[rgba(1,22,56,0.7)]">
              Print/Email
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="mb-[15px] mt-[25px] flex gap-2 cursor-pointer items-center">
          <CheckBox id={"check"} color={color} checked={true} />
          <label
            className="mt-px cursor-pointer select-none font-light text-gray-700"
            htmlFor="check"
          >
            Yapsody may notify me of special offers and events in my area
          </label>
        </div>
        <div className="mb-[5px] flex gap-2 cursor-pointer items-center">
          <CheckBox id={"check1"} color={color} checked={true} />
          <label
            className="cursor-pointer select-none font-light text-gray-700"
            htmlFor="check1"
          >
            Presenter may notify me of special offers and events
          </label>
        </div>
        <div className="mb-[5px] mt-[20px] border-b">
          <p className="mb-[10px] text-[14px] font-normal text-[rgba(1,22,56,0.7)]">
            <span className="text-[rgba(1,22,56,0.7)]">
              By continuing, you agree to Yapsody{" "}
              <Link
                href={"https://staging.yapsody.com/ticketing/terms-of-use/"}
                className="underline"
                style={{ color: color }}
              >
                Terms & Conditions
              </Link>{" "}
              and acknowledge that merchants/presenters set their own refund
              policies.
            </span>
            <span className="text-[rgba(1,22,56,0.7)]">
              Payments securely processed throughYapSecure
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneralInstructions;
