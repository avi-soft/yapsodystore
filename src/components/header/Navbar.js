import Dropdown from "@/components/header/dropdown/Dropdown";
import HeaderLogo from "@/components/header/HeaderLogo";
import Account from "@/components/header/Account";
import CartIcon from "@/components/header/CartIcon";
import styles from "./Navbar.module.css";

// Navbar component definition
const Navbar = () => {
  const isLogin = true;
  const userName = "yaptestaddon4 test";
  const isPaymentPage = false;

  return (
    <header className={`${styles.header}`}>
      <HeaderLogo />
      {isPaymentPage ? (
        <div className="float-right">Timer</div>
      ) : (
        <div
          className={`${styles.headerRight} flex flex-wrap justify-between items-center`}
        >
          <Dropdown text="EN" />

          <div className={`${styles.pullLeft} flex items-center shrink`}>
            <CartIcon />
          </div>
          {isLogin ? <Dropdown text={userName} /> : <Account />}
        </div>
      )}
    </header>
  );
};

export default Navbar;
