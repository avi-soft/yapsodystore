import Dropdown from "@/components/header/dropdown/Dropdown";
import HeaderLogo from "@/components/header/HeaderLogo";
import Account from "@/components/header/Account";
import CartIcon from "@/components/header/CartIcon";
import styles from "./Navbar.module.css";

// Navbar component definition
const Navbar = () => {
  const isLogin = true;
  const userName = "yaptestaddon4 test";

  const language_code = "FR";
  const top_image = "https://s3.amazonaws.com/ft-images/top_logo/affbd71e9b4d30c1b18264f6a91faae8dbfcca5c.jpg"
  const color = "53D63C";
  const apiRes= true;  //if true sends prop values  


  return (
    <header className={`${styles.header}`}>
      <HeaderLogo  topImage={top_image} apiRes={apiRes} />
      <div
        className={`${styles.headerRight} flex flex-wrap justify-between items-center`}
      >
        <Dropdown languageCode={language_code}  type="EN" />

        <div className={`${styles.pullLeft} flex items-center shrink`}>
          <CartIcon iconColor={color} apiRes={apiRes} />
        </div>
        {isLogin ? <Dropdown type={userName} /> : <Account />}
      </div>
    </header>
  );
};

export default Navbar;
