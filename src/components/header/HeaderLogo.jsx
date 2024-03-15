import Link from "next/link";
import Image from "next/image";

import styles from "./Navbar.module.css";
import logo from "@/../public/store-logo.png";

// HeaderLogo component definition
const HeaderLogo = ({ topImage, venueName }) => {
  return (
    <div>
      <div className={styles.headerLeft}>
        <Link href={"/"}>
          <Image src={logo} alt="Logo" className={styles.headerLogo} priority />
        </Link>
        <Link href={"/"} className={styles.headerVenue}>
          <div className="flex flex-row items-center ">
            <div className="md:block hidden">
              {topImage && (
                <Image src={topImage} alt="id" height={50} width={50}></Image>
              )}
            </div>

            <div
              className={`ml-1  flex items-center mt-3 md:mt-0 md:ml-4 ${styles.headerVenue} `}
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
