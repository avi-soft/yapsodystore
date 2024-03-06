import { TbWorldWww } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";

const basepath = "/assets/images/social_media/";

const linkTypes = {
  facebook: "facebook_icon.svg",
  twitter: "twitter_icon.svg",
  instagram: "insta_icon.svg",
};
export default function SocialLinks({ url, type }) {
  const width = 22;
  const height = 22;

  return (
    <p>
      <Link href={url}>
        {type === "website" ? (
          <span>
            <TbWorldWww className="w-5 h-6 inline mr-1" />
            {url}
          </span>
        ) : (
          <Image
            src={`${basepath}${linkTypes[type]}`}
            width={width}
            height={height}
            alt={type}
          ></Image>
        )}
      </Link>
    </p>
  );
}
