import Image from "next/image";


import styles from "./Navbar.module.css";
import arrow from "@/../public/angle-down-solid.svg";
import Dropdown from "@/components/header/Dropdown";
import HeaderLogo from "@/components/header/HeaderLogo";
import Account from "@/components/header/Account";
import CartIcon from '@/components/header/CartIcon';

// Navbar component definition
const Navbar = () => {

  return (
    <header className={`${styles.header}`}>
      <HeaderLogo />
      <div className={`${styles.headerRight} flex flex-wrap justify-between items-center`}>
        <div className={`${styles.pullLeft} flex items-center flex-shrink-0`}>
          <button className="flex flex-row h-12 items-center ">
            <Dropdown />
            <Image className="pt-1" src={arrow} height={13} width={15} alt="dropdown arrow"></Image>
          </button>
        </div>
        <div className={`${styles.pullLeft} flex items-center shrink`}>
          <CartIcon />
        </div>
        <div className={`${styles.pullLeft} flex items-center flex-shrink-0`}>
          <Account />
        </div>
      </div>
    </header>
  );
};


export default Navbar;

