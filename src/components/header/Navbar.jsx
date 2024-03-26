import Dropdown from "@/components/header/dropdown/Dropdown";
import HeaderLogo from "@/components/header/HeaderLogo";
import Account from "@/components/header/Account";
import CartIcon from "@/components/header/CartIcon";
import styles from "./Navbar.module.css";
import { getLanguageData } from "@/helpers/api-utils";
// langCode={langCode} venueName={venueName} brandImage={brandImage} iconColor
// Navbar component definition
const Navbar = async ({ langCode, brandImage, venueName, iconColor }) => {
  const languageData = await getLanguageData();
  const isLogin = false;
  const userName = "yaptestaddon4 test";
  // const top_image = "https://s3.amazonaws.com/ft-images/top_logo/affbd71e9b4d30c1b18264f6a91faae8dbfcca5c.jpg"
  const color = "53D63C";
  const apiRes = true; //if true sends prop values

  return (
    <header className={`${styles.header}`}>
      <HeaderLogo
        topImage={brandImage}
        apiRes={apiRes}
        venueName={venueName}
        iconColor={iconColor}
      />
      <div
        className={`${styles.headerRight} flex flex-wrap justify-between items-center cursor-pointer`}
      >
        <Dropdown langCode={langCode} languageData={languageData} type="lang" />

        <div className={`${styles.pullLeft} h-[57px] flex items-center shrink`}>
          <CartIcon iconColor={iconColor} />
        </div>
        {isLogin ? (
          <Dropdown type="account" user={userName} />
        ) : (
          <Account color={iconColor} />
        )}
      </div>
    </header>
  );
};
export default Navbar;