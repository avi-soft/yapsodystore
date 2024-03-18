
import HeaderLogo from "@/components/header/HeaderLogo";
import CartIcon from "@/components/header/CartIcon";
import styles from "@/components/header/Navbar.module.css";
import { getThemeData } from "@/helpers/api-utils";
import { BsInfoCircleFill } from "react-icons/bs";


// Navbar component definition
const BookingHeader = async ({ iconColor }) => {
 
  // const top_image = "https://s3.amazonaws.com/ft-images/top_logo/affbd71e9b4d30c1b18264f6a91faae8dbfcca5c.jpg"
 // langCode={langCode} venueName={venueName} brandImage={brandImage} iconColor
  const {
    venueName,
    brandImage,
    
} = await getThemeData();
  return (
    <header className={`${styles.header}`}>
      <HeaderLogo
        topImage={brandImage}
        venueName={venueName}
       
      />
      <div
        className={`${styles.headerRight} flex flex-wrap justify-between items-center`}
      >
      

        <div className={`${styles.pullLeft} flex items-center shrink m-1`}>
          <CartIcon iconColor={iconColor} />
        </div>
        <div className="md:hidden mx-5">
          
        
        <div className="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    
    <label htmlFor="my-drawer-4" className="drawer-button "><BsInfoCircleFill size={32}/></label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      
    </ul>
  </div>
</div>
        </div>
       
      </div>
    </header>
  );
};
export default BookingHeader;

<div className="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary"><BsInfoCircleFill size={32}/></label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
     
    </ul>
  </div>
</div>