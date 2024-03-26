import SocialLinks from "./SocialLinks";

export default function SocialMedia({
  position,
  iconColor = "black",
  facebookUrl,
  twitterUrl,
  instagramUrl,
  websiteUrl,
}) {
  const social_links = {
    facebookUrl,
    twitterUrl,
    instagramUrl,
    websiteUrl,
  };

  return (
    <div
      className={`flex flex-row justify-${position} items-center gap-4 flex-wrap mb-4`}
    >
      {social_links.facebookUrl && (
        <SocialLinks url={social_links.facebookUrl} type="facebook" />
      )}
      {social_links.twitterUrl && (
        <SocialLinks url={social_links.twitterUrl} type="twitter" />
      )}
      {social_links.instagramUrl && (
        <SocialLinks url={social_links.instagramUrl} type="instagram" />
      )}
      {social_links.websiteUrl && (
        <SocialLinks
          url={social_links.websiteUrl}
          type="website"
          iconColor={iconColor}
        />
      )}
     
    </div>
  );
}
