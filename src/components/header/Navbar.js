import Image from "next/image";

import styles from "./Navbar.module.css";
import Dropdown from "@/components/header/dropdown/Dropdown";
import HeaderLogo from "@/components/header/HeaderLogo";
import Account from "@/components/header/Account";
import CartIcon from "@/components/header/CartIcon";

// Navbar component definition
const Navbar = () => {
  const isLogin = true;
  const userName = "yaptestaddon4 test";

  return (
    <header className={`${styles.header}`}>
      <HeaderLogo />
      <div
        className={`${styles.headerRight} flex flex-wrap justify-between items-center`}
      >
        <div className={`${styles.pullLeft} flex items-center flex-shrink-0`}>
          <button className="flex flex-row h-12 items-center ">
            <Dropdown text="EN" />
          </button>
        </div>
        <div className={`${styles.pullLeft} flex items-center shrink`}>
          <CartIcon />
        </div>
        <div className={`${styles.pullLeft}   flex items-center flex-shrink-0`}>
          {isLogin ? (
            <button className="flex flex-row h-12 items-center ">
              <Dropdown text={userName} />
            </button>
          ) : (
            <Account />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
