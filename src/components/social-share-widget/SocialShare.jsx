import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
export default function SocialShareWidget(){
    return ( <section className="fixed bottom-[40%] right-0 block rounded bg-[#ffffff] p-[12px] text-[30px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.335)]">
    <ul>
      <li className="pb-2">
        <Link href={"/"}>
          <FaFacebookSquare className="text-[#3b5998]" />
        </Link>
      </li>
      <li className="pb-2">
        <Link href={"/"}>
          <FaTwitter className="text-[#4099ff]" />
        </Link>
      </li>
      <li className="pb-2">
        <Link href={"/"}>
          <FaPinterest className="text-[#C8232C]" />
        </Link>
      </li>
      <li className="pb-2">
        <Link href={"/"}>
          <IoShareSocial className="text-[#c0c0c0]" />
        </Link>
      </li>
    </ul>
  </section>)
}