import Link from "next/link";
import { PiUserCircleFill } from "react-icons/pi";

//account definition that changes to logo
const Account = () => {
  return (
    <div>
      <Link href={"/login"}>
        <p className="myAccount hidden sm:inline-block"> My Account</p>
        <span className="sm:hidden">
          <PiUserCircleFill alt="user-male-circle " className="h-10 w-10" />
        </span>
      </Link>
    </div>
  );
};

export default Account;
