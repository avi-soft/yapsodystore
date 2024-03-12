"use client";

import React from "react";
import { useState } from "react";
import PaymentMethodImage from "./PaymentMethodImage";
import PaymentMethodDescription from "./PaymentMethodDescription";

const PaymentMethodList = ({ Paymentmethods, color }) => {
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  return (
    <div>
      <ul className="mt-[20px] inline-block w-[90%] list-none">
        {Paymentmethods.map((method) => (
          <li className="box-border inline-block w-[100%]" key={method.title}>
            <a
              onClick={() => setPaymentMethod(method.title)}
              className={`relative mb-[12px] block w-[100%] cursor-pointer rounded-[3px] border-[1px] border-solid px-[15px] py-[15px] text-left`}
              style={
                paymentMethod === method.title
                  ? {
                      backgroundColor: "#f8f8f8",
                      border: `1px solid ${color}`,
                      color: "#6d798e",
                    }
                  : {}
              }
            >
              <div
                className={`absolute left-[15px] top-[18px] inline-block h-[20px] w-[20px] rounded-[50%] border-[1px] border-solid border-[rgba(0,21,56,0.25)] bg-[#ffffff] shadow-[0px_2px_4px_0px_rgba(0,0,0,0,0.12)]`}
                style={
                  paymentMethod === method.title
                    ? { border: `6px solid ${color}` }
                    : {}
                }
              ></div>
              <div className="ml-[35px] ">
                <p className="m-0 inline-block transform-none text-[18px] font-normal text-[#687488]">
                  {method.title}
                </p>
                {paymentMethod === method.title && method.description && (
                  <PaymentMethodDescription method={method} color={color} />
                )}
                {method.photo && <PaymentMethodImage method={method} />}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentMethodList;
