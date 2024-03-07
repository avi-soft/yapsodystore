import { TbWorldWww } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { FaComments } from "react-icons/fa";

const iconList = {
  support: FaComments,
  website: TbWorldWww,
  contact: MdEmail,
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
      <span>{reactIcon}</span>
      <span>{children}</span>
    </div>
  );
}
