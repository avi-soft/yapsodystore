import { RxCrossCircled } from "react-icons/rx";
export default function SupportWrapper({ children, background }) {
  const style = background && { backgroundColor: background };
  return (
    <dialog
      id="esc_modal"
      className="modal modal-middle bg-[#2b313d] bg-opacity-90 z-[1050px] flex flex-col justify-center items-center  lg:hidden"
    >
      <div className="w-full flex flex-col justify-center items-center">
        <div className="modal-action ml-auto mr-5 ">
          <form method="dialog">
            <button className="text-white p-2 flex flex-row items-center gap-2">
              <RxCrossCircled
                size={28}
                className="cursor-pointer  text-white"
              />
              <span className="text-[16px]">ESC</span>
            </button>
          </form>
        </div>
        <div
          className="modal-box rounded-[4px] p-[0.3rem]"
          style={{ maxWidth: "inherit" }}
        >
          {children}
        </div>
      </div>
    </dialog>
  );
}
