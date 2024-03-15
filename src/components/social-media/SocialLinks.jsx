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
  const width = 23;
  const height = 24;

  return (
    <span>
      
      <Link href={url}>
      
        {type === "website" ? (
          
          <IconLabel color={iconColor} size="size-5" icon="website" gap={3}>
            <div className=" text-[14px]">
            {url}
            </div>
          </IconLabel>
          
        ) : (
          <Image
            src={`${basepath}${linkTypes[type]}`}
            width={width}
            height={height}
            alt={type}
          />
        )}
      </Link>
    </span>
  );
}
