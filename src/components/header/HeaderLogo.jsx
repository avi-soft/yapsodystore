import Link from "next/link";
import Image from "next/image";

import styles from "./Navbar.module.css";
import logo from "@/../public/store-logo.png";

// HeaderLogo component definition
const HeaderLogo = ({ topImage, venueName }) => {

  //HeaderLogo style for when topImage is present and when it isn't

 let headerStyle= topImage ? "mt-[7px] md:mt-[-10px] md:ml-[2px] lg:ml-4 " : "mt-[8px] lg:ml-[16px]"


  return (
    <div>
      <div className={styles.headerLeft}>
        <Link href={"/"}>
          <Image
            src={logo}
            size={26}
            alt="Logo"
            className={styles.headerLogo}
            priority
          />
        </Link>
        <Link href={"/"} className={styles.headerVenue}>
          <div className="flex flex-row items-center ">
            <div className="md:block hidden">
              {topImage && (
                <Image src={topImage} alt="id" height={50} width={50}></Image>
              )}
            </div>

            <div
              className={`${headerStyle} ${styles.headerVenue} `}
            >
              {venueName}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeaderLogo;
