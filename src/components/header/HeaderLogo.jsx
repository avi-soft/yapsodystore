import Link from "next/link";
import Image from "next/image";

import styles from "./Navbar.module.css";
import logo from "@/../public/store-logo.png";



// HeaderLogo component definition
const HeaderLogo = ({topImage,apiRes}) => {
  return (
    <div>
      <div className={styles.headerLeft}>
        <Link href={"/"}>
          <Image src={logo} alt="Logo" className={styles.headerLogo} priority />
        </Link>
        <Link href={"/"} className={styles.headerVenue}>
         <div className="flex flex-row ">
         {apiRes && <Image src={topImage} alt="id" height={30} width={30} ></Image>}
         <span className="ml-2"> yaptestaddon4</span>
         </div>
        </Link>
      </div>
    </div>
  );
};

export default HeaderLogo;
