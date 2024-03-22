import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
export default function SocialShareWidget() {
  return (
    <section className="fixed md:bottom-[40%] bottom-[10%] max-[376px]:bottom-[12%] max-[430px]:bottom-[6%] max-[414px]:bottom-[7%] max-[360px]:bottom-[10%] z-20 sm:right-0 max-sm:left-0 block md:rounded bg-[#ffffff] p-[8px] text-[30px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.335)] max-md:bottom-[calc(0+67px)]">
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
