import Image from "next/image";

import styles from "./Navbar.module.css";
import arrow from "@/../public/angle-down-solid.svg"
import Dropdown from "@/components/header/Dropdown";
import User from "@/components/header/User";
import Account from "@/components/header/Account";
import Wallet from '@/components/header/Wallet';


const Navbar = () => {

  return (

    <header className={`${styles.header}`}>
      <User />
      <div className={`${styles.headerRight} flex flex-wrap justify-between items-center`}>
        <div className={`${styles.pullLeft} flex items-center flex-shrink-0`}>
          <button className="flex flex-row h-12 items-center ">
            <Dropdown />
            <Image className="pt-1" src={arrow} height={13} width={15} alt="dropdown arrow"></Image>
          </button>
        </div>
        <div className={`${styles.pullLeft} flex items-center shrink`}>
          <Wallet />
        </div>
        <div className={`${styles.pullLeft} flex items-center flex-shrink-0`}>
          <Account />
        </div>
      </div>
    </header>
  );
};

export default Navbar;


