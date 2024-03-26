"use client";
import { RxCrossCircled } from "react-icons/rx";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function ImageVideoWrapper({
  children,
  onClickNext,
  onClickPrev,
  count,
  type,
}) {
  const style =
    type === "video"
      ? "w-[272px] sm:w-[666px] h-[200px] sm:h-[482px]"
      : "w-[259px] sm:w-[320px] h-[189px] sm:h-[240px]";
  const justfyContentStyle = count>1?"justify-between":"justify-center";
  return (
    <>
      <dialog
        id={`${type}_modal`}
        className="  modal modal-middle sm:mt-auto  bg-[#141b28] bg-opacity-90 z-[1050px] border-none rounded-none "
      >
        <div
          className={`modal-box flex flex-col  ${
            type !== "video" ? "sm:gap-[8rem]" : ""
          } justify-center items-center p-3 shadow-none bg-transparent overflow-hidden sm:mt-0 `}
          style={{ maxWidth: "fit-content" }}
        >
          <div
            // className="w-[259px] sm:w-[320px]
            //    h-[189px] sm:h-[240px] relative bg-transparent rounded-[4px] border-[4px] border-white cursor-pointer"
            className={`${style} relative bg-transparent rounded-[4px] border-[4px] border-white cursor-pointer`}
            onClick={onClickNext}
          >
            {children}
          </div>

          <div
            className={`modal-action bg-transparent  flex ${justfyContentStyle} w-full items-center   sm:text-[24px] text-[32px] `}
          >
            {count > 1 && (
              <button className="text-white">
                <IoIosArrowBack size={42} onClick={onClickPrev} />
              </button>
            )}
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="bg-transparent text-white border-none flex items-center gap-3 ">
                <RxCrossCircled className="cursor-pointer  text-white size-8 sm:size-6" />
                <span className="">CLOSE</span>
              </button>
            </form>
            {count > 1 && (
              <button className="text-white ">
                <IoIosArrowForward size={42} onClick={onClickNext} />
              </button>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}
