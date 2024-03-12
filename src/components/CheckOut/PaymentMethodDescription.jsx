import React from "react";
import CheckBox from "@/ui/CheckBox";

const PaymentMethodDescription = ({ method, color }) => {
  return (
    <div className="block">
      <h3>{method.description}</h3>
      <p className="text-[13px]">{method.title.toLocaleLowerCase()}</p>
      <div className="flex mt-[2px]">
        <label
          className="relative flex items-center p-3 rounded-full cursor-pointer"
          htmlFor="check"
          data-ripple-dark="true"
        >
          <CheckBox id={"checkcondition"} color={color} checked={false} />
        </label>
        <label
          className="mt-[12px] cursor-pointer select-none font-light text-gray-700 "
          htmlFor="checkcondition"
        >
          I agree to the terms and conditions
        </label>
      </div>
    </div>
  );
};

export default PaymentMethodDescription;
