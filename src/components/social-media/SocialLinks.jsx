import Link from "next/link";
import Image from "next/image";

import IconLabel from "@/ui/IconLabel";

const basepath = "/assets/images/social_media/";
const linkTypes = {
  facebook: "facebook_icon.svg",
  twitter: "twitter_icon.svg",
  instagram: "insta_icon.svg",
};

export default function SocialLinks({ url, type, color }) {
  const width = 22;
  const height = 22;

  return (
    <span>
      <Link href={url}>
        {type === "website" ? (
          <IconLabel color={color} size="size-6" icon="website" gap={3}>{url}</IconLabel>
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
