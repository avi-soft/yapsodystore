import React from "react";
import CheckBox from "@/ui/CheckBox";

const PaymentMethodDescription = ({ method, color }) => {
  return (
    <div className="block">
      <h3>{method.description}</h3>
      <p className="text-[13px]">{method.title.toLocaleLowerCase()}</p>
      <div className="flex gap-2 mt-[2px]">
        <CheckBox id={"checkcondition"} color={color} />
        <label
          className="mt-[2px] cursor-pointer select-none font-light text-gray-700 "
          htmlFor="checkcondition"
          defaultChecked
        >
          I agree to the terms and conditions
        </label>
      </div>
    </div>
  );
};

export default PaymentMethodDescription;
