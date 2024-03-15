import Link from "next/link";
import { IoShareSocial } from "react-icons/io5";
import ContactPresenter from "../contact/ContactPresenter";

function BottomView({bgColor,textColor}) {
  return (
    <div className={`text flex z-20 py-3 px-4 ${bgColor} text-white w-[100%] left-0 right-0 border border-white bottom-[0%] fixed`}>
      <div className="text mr-5">
        <ul>
        <li >
          <Link href={""}>
            <IoShareSocial  className={`size-5 ${textColor}`} />
          </Link>
        </li>
        </ul>
      </div>
      <div>
        <ContactPresenter size="size-6" color={textColor} />
      </div>
    </div>
  )
}

export default BottomView
