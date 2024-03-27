import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import Image from "next/image";

import { IoShareSocial } from "react-icons/io5";
import Pinterest from "@/../public/pinterest.svg";
export default function SocialShareWidget() {
  return (
    <section >

      <ul>
        <li className="pb-2">
          <Link href={"/"}>
            <FaFacebookSquare size={24} className="text-[#3b5998]" />
          </Link>
        </li>
        <li className="pb-2">
          <Link href={"/"}>
            <FaTwitterSquare size={24} className="text-[#4099ff]" />

          </Link>
        </li>
        <li className="pb-2">
          <Link href={"/"}>

            <Image src={Pinterest} alt="" height={24} width={23} />


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
