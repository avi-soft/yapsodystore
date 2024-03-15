import React from "react";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

const ConfirmPayment = ({ paymentMethod, color }) => {
  return (
    <div className="box-border inline-block w-[60%] mt-[40px] float-left bottom-0 fixed z-20 ">
      <div
        className={`relative mb-[12px] flex gap-12 justify-end items-center w-[100%] rounded-[3px] border-[1px] border-solid px-[6px] py-[6px] text-[20px] bg-[#f8f8f8] max-lg:text-[14px] max-md:text-[12px]`}
      >
        <Link
          href={"/"}
          className="flex items-center justify-end gap-4 cursor-pointer w-[50%]"
          style={{ color: color }}
        >
          {/* <div className="float-left"> */}
            <span>
              <FaLongArrowAltLeft />
            </span>
            <span>
              <u>Continue Shopping</u>
            </span>
          {/* </div> */}
        </Link>
        <Link
          href={"/"}
          className="w-[40%] justify-center gap-4 flex items-center cursor-pointer p-[8px] rounded-[3px] text-white"
          style={{ backgroundColor: color }}
        >
          <span>
            <p>Pay with {paymentMethod}</p>
          </span>
          <span>
            <FaLongArrowAltRight />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ConfirmPayment;
