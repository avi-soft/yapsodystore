import Link from "next/link";

const Account = () => {
  return (
    <div>
      <Link href={"/account"}>
        <p className="myAccount hidden sm:inline-block"> My Account</p>
        <img width="30" height="30" src="https://img.icons8.com/material-rounded/24/user-male-circle.png" alt="user-male-circle " className="sm:hidden" />
      </Link>
    </div>
  )
}

export default Account
