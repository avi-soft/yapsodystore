import { TbWorldWww } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { FaComments } from "react-icons/fa";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { SlLink } from "react-icons/sl";
const iconList = {
  support: FaComments,
  website: TbWorldWww,
  contact: MdEmail,
  presenterFaq: HiQuestionMarkCircle,
  hyperlinks: SlLink,
};
export default function IconLabel({
  icon,
  size,
  color = "black",
  children,
  gap,
  actions,
}) {
  const IconTag = iconList[icon];
  const reactIcon = <IconTag className={`${size}`} />;
  return (
    <div
      style={{ color }}
      className={`flex gap-${gap} cursor-pointer`}
      {...actions}
    >
      <span className={icon == "hyperlinks" ? "mt-1" : ""}>{reactIcon}</span>
      <span className="whitespace-nowrap overflow-hidden text-ellipsis text-[14px]">
        {children}
      </span>
    </div>
  );
}
