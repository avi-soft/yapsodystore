import Link from "next/link";
import Image from "next/image";

import IconLabel from "@/ui/IconLabel";

const basepath = "/assets/images/social_media/";
const linkTypes = {
  facebook: "facebook_icon.svg",
  twitter: "twitter_icon.svg",
  instagram: "insta_icon.svg",
};

export default function SocialLinks({ url, type, iconColor }) {
  
  return (
    <span>
      
      <Link href={url}>
        {type === "website" || type === "hyperlinks" ? 
          (
            <IconLabel
              color={iconColor}
              size={type === "website" ?"size-5":"size-4"}
              icon={type}
              gap={3}
            >
              {url}
            </IconLabel>
          ) : (
          <Image
            src={`${basepath}${linkTypes[type]}`}
            width={23}
            height={24}
            alt={type}
          />
        )}
      </Link>
    </span>
  );
}
