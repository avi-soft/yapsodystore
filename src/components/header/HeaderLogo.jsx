import Link from "next/link";
import Image from "next/image";

import styles from "./Navbar.module.css";
import logo from "@/../public/store-logo.png";

// HeaderLogo component definition
const HeaderLogo = ({ topImage, apiRes, venueName }) => {
  return (
    <div>
      <div className={styles.headerLeft}>
        <Link href={"/"}>
          <Image src={logo} alt="Logo" className={styles.headerLogo} priority />
        </Link>
        <Link href={"/"} className={styles.headerVenue}>
          <div className="flex flex-row items-center">
            {apiRes && (
              <Image
                src={topImage}
                alt="id"
                height={50}
                width={50}
                className=""
              ></Image>
            )}
            <span className="ml-5"> {venueName}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeaderLogo;
