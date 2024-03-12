import Image from "next/image";

const CartIcon = ({ iconColor ,apiRes }) => {
  
  return (
    <div>

      <div className="relative inline-block mt-2 pb-1">
        <span className="absolute bottom-[21px] left-4 bg-white w-6 h-6 rounded-full  
          inline-flex items-center justify-center  
           overflow-hidden border-black border text-sm">0</span>

{apiRes ? (
          <Image
            width="35"
            height="35"
            src={`https://img.icons8.com/material-rounded/48/${iconColor}/two-tickets.png`}
            className="inline-block"
            alt="two-tickets"
          />
        ) : (
          <Image
            width="35"
            height="35"
            src={`https://img.icons8.com/material-rounded/48/000000/two-tickets.png`}  
            className="inline-block"
            alt="default-image"
          />
        )}

      </div>

    </div>
  );
}

export default CartIcon;
