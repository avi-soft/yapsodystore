import Link from "next/link";
import { IoShareSocial } from "react-icons/io5";
import ContactPresenter from "../contact/ContactPresenter";
import Button from "@/ui/Button";

function BottomView({ buttonLinkBoxBorderColor, isEventTypePhysical }) {
  return (
    <div
      className={`items-center justify-between text flex z-20 py-[12px] px-[15px] bg-[#e0e1ea] text-white w-[100%] left-0 right-0 border border-white bottom-[0%] h-[52px] fixed`}
    >
      <div className="text mr-5 flex gap-7">
        <ul>
          <li>
            <Link href={""}>
              <IoShareSocial size={24} color={buttonLinkBoxBorderColor} />
            </Link>
          </li>
        </ul>
        <ContactPresenter size="size-6" color={buttonLinkBoxBorderColor} />
      </div>
      <div className="text-[14px]">
        {isEventTypePhysical && (
          <Button
            height={"23px"}
            className="p-[6px] "
            width={"116px"}
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
