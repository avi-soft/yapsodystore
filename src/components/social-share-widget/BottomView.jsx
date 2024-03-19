"use client"
import Link from "next/link";
import { IoShareSocial } from "react-icons/io5";
import ContactPresenter from "../contact/ContactPresenter";
import Button from "@/ui/Button";

function BottomView({ buttonLinkBoxBorderColor, isEventTypePhysical, onChangeState }) {
  const handleChange = (state) => {
    onChangeState(state);
  }

  return (
    <div
      className={`items-center justify-between text flex z-20 py-[21px] px-[15px] bg-[#e0e1ea] text-white w-[100%] left-0 right-0 border border-white bottom-0 fixed`}
    >
      <div className="text mr-5 flex gap-7">

        <Link href={""} onClick={() => handleChange(false)}>
          <IoShareSocial size={24} color={buttonLinkBoxBorderColor}  />
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
  );
}

export default BottomView;
