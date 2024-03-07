import Image from "next/image";
import boxOffice from "@/../public/assets/icons/two-tickets.png";

// CartIcon component definition
const CartIcon = () => {
  return (
    <div>
      <div className="relative inline-block mt-2 pb-1">
        <span
          className="absolute bottom-[21px] left-4 bg-white w-6 h-6 rounded-full  
          inline-flex items-center justify-center  
           overflow-hidden border-black border text-sm"
        >
          0
        </span>
        <Image
          width="35"
          height="35"
          src={boxOffice}
          className="inline-block"
          alt="two-tickets"
        />
      </div>
    </div>
  );
};

export default CartIcon;
