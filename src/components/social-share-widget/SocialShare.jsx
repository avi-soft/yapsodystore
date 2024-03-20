import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
export default function SocialShareWidget() {
  return (
    <section className="fixed md:bottom-[45%] bottom-[8%] z-20 right-0 block md:rounded bg-[#ffffff] px-[12px] py-[14px] text-[30px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.335)]">
      <ul>
        <li className="pb-2">
          <Link href={"/"}>
            <FaFacebookSquare size={24} className="text-[#3b5998]" />
          </Link>
        </li>
        <li className="pb-2">
          <Link href={"/"}>
            <FaTwitter size={24} className="text-[#4099ff]" />
          </Link>
        </li>
        <li className="pb-2">
          <Link href={"/"}>
            <FaPinterest size={24} className="text-[#C8232C]" />
          </Link>
        </li>
        <li className="pb-2 hidden md:block">
          <Link href={"/"}>
            <IoShareSocial size={24} className="text-[#c0c0c0]" />
          </Link>
        </li>
      </ul>
    </section>
  );
}
