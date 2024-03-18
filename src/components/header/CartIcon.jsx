import Image from "next/image";

const CartIcon = ({ iconColor ,apiRes }) => {
  
  return (
    <div>

      <div className="relative inline-block mt-2">
        <span className="absolute bottom-[15px] left-4 bg-white w-[25px] h-[25px] font-roboto rounded-full  
          inline-flex items-center justify-center 
           overflow-hidden border-black border ">0</span>

{/* {apiRes ? (
          <Image
            width="32"
            height="32"
            src={`https://img.icons8.com/material-rounded/48/${iconColor}/two-tickets.png`}
            className="inline-block"
            alt="two-tickets"
          />
        ) : ( */}
          <Image
            width="32"
            height="32"
            src={`https://img.icons8.com/material-rounded/48/000000/two-tickets.png`}  
            className="inline-block"
            alt="default-image"
          />
        {/* )} */}

      </div>

    </div>
  );
}

export default CartIcon;
