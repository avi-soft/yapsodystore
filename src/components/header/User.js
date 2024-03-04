import Link from "next/link";
import Image from "next/image";

import styles from "./Navbar.module.css";
import logo from "@/../public/store-logo.png";


const User = () => {
    return (
        <div>
            <div className={styles.headerLeft}>
                <Link href={"/home"}>
                    <Image src={logo} alt="Logo" className={styles.headerLogo} priority />
                </Link>
                <Link href={"/home"} className={styles.headerVenue}>
                    yaptestaddon4
                </Link>
            </div>
        </div>
    )
}

export default User
