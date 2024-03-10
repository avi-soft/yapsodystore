"use client"

import React from "react";
import { useState } from "react";
import Image from "next/image";
const PaymentMethodList = ({ Paymentmethods }) => {
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  return (
    <div>
      <ul className="mt-[20px] inline-block w-[90%] list-none">
        {Paymentmethods.map((method) => (
          <li className="box-border inline-block w-[100%]" key={method.title}>
            <a
              onClick={() => setPaymentMethod(method.title)}
              className={`${
                paymentMethod === method.title &&
                "border-[1px] border-solid border-[var(--highlightColor)] bg-[#f8f8f8] text-[#6d798e]"
              }
          relative mb-[12px] block w-[100%] cursor-pointer rounded-[3px] border-[1px] border-solid px-[15px] py-[15px] text-left`}
            >
              <div
                className={`${
                  paymentMethod === method.title &&
                  "border-[6px] border-solid border-[var(--highlightColor)]"
                } absolute left-[15px] top-[18px] inline-block h-[20px] w-[20px] rounded-[50%] border-[1px] border-solid border-[rgba(0,21,56,0.25)] bg-[#ffffff] shadow-[0px_2px_4px_0px_rgba(0,0,0,0,0.12)]`}
              ></div>
              <div className="ml-[35px] ">
                <p className="m-0 inline-block transform-none text-[18px] font-normal text-[#687488]">
                  {method.title}
                </p>
                {paymentMethod === method.title && method.description && (
                  <div className="block">
                    <h3>{method.description}</h3>
                    <p className="text-[13px]">
                      {method.title.toLocaleLowerCase()}
                    </p>
                    <div className="flex gap-2 mt-[2px]">
                      <label
                        className="relative flex cursor-pointer items-center rounded-full"
                        htmlFor="checkcondition"
                      >
                        <input
                          type="checkbox"
                          className="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border border-[var(--highlightColor)] transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:bg-[var(--highlightColor)] before:opacity-0 before:transition-opacity checked:border-[var(--highlightColor)] checked:bg-[var(--highlightColor)] checked:before:bg-[var(--highlightColor)] hover:before:opacity-10 focus:ring-transparent checked:hover:bg-[var(--highlightColor)]"
                          id="checkcondition"
                        />
                        <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="1"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </label>
                      <label
                        className="mt-[2px] cursor-pointer select-none font-light text-gray-700 "
                        htmlFor="checkcondition"
                      >
                        Presenter may notify me of special offers and events
                      </label>
                    </div>
                  </div>
                )}
                {method.photo && (
                  <Image src={method.photo} className="float-right" alt={image}></Image>
                )}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentMethodList;
