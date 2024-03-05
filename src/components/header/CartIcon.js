// CartIcon component definition
const CartIcon = () => {
  return (
    <div>
      
      <div className="relative inline-block mt-2 pb-1">
       
        <span className="absolute top-0 right-0 bg-white w-5 h-5 rounded-full  
          inline-flex items-center justify-center  
          font-bold text-black overflow-hidden border-black border text-xs">0</span>
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/material-rounded/48/000000/two-tickets.png"
          className="inline-block"
          alt="two-tickets"
        />
      </div>
    </div>
  );
}

export default CartIcon;
