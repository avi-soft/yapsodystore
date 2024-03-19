import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

//account definition that changes to logo
const Account = () => {
  let color = "#000000";
  return (
    <div className={`${styles.pullLeft} flex items-center flex-shrink-0`}>
      <Link href={"/login"}>
        <p className="myAccount hidden sm:inline-block"> My Account</p>
        <span className="sm:hidden">
          <Image
            height={36}
            width={36}
            src={`https://img.icons8.com/ios-filled/50/${color.slice(
              1,
              7
            )}/user-male-circle.png`}
            alt="user-male-circle"
            className="w-9 h-9"
          />
        </span>
      </Link>
    </div>
  );
};

export default Account;
