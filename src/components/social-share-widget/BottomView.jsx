"use client";
import Link from "next/link";
import { IoShareSocial } from "react-icons/io5";
import ContactPresenter from "../contact/ContactPresenter";
import Button from "@/ui/Button";
import { useState } from "react";
import SocialShareWidget from "./SocialShare";

function BottomView({ buttonLinkBoxBorderColor, isEventTypePhysical }) {
  const [view, setView] = useState(true);

  return (
    <>
      <div className="bottom-[40%] max-md:hidden fixed z-20 right-0 block md:rounded bg-[#ffffff] p-[12px] text-[30px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.335)]">
        {" "}
        <SocialShareWidget />
      </div>
      <div className="hidden max-md:block mt-[57px] max-sm:mt-[65px] max-[375px]:mt-[75px]">
        <div
          className={`items-center justify-between text flex z-20 py-[21px] px-[15px] bg-[#e0e1ea] text-white w-[100%] left-0 right-0 border border-white bottom-0 fixed`}
        >
          {view && (
            <div className="max-md:bottom-[calc(0%+67px)] max-sm:left-0 absolute z-20 right-0 max-sm:right-auto md:rounded bg-[#ffffff] p-[12px] text-[30px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.335)] max-[376px]:bottom-[calc(0%+82px)]">
              <SocialShareWidget />
            </div>
          )}
          <div className="text mr-5 flex gap-7">
            <Link href={""} onClick={() => setView(!view)}>
              <IoShareSocial size={24} color={buttonLinkBoxBorderColor} />
            </Link>
            <ContactPresenter size="size-6" color={buttonLinkBoxBorderColor} />
          </div>
          <div className="text-[14px]">
            {isEventTypePhysical && (
              <Button
                height={"100%"}
                className="p-[6px]"
                width={"100%"}
                to="#gMap"
                styles={{ padding: "1px 10px" }}
                color={buttonLinkBoxBorderColor}
              >
                Get Directions
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default BottomView;
