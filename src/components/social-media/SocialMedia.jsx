import SocialLinks from "./SocialLinks";

const social_links = {
  facebook_url: "https://facebook.com/9gags",
  twitter_url: "https://twitter.com/9gags",
  instagram_url: "https://instagram.com/9gags",
  website_url: "https://stackoverflow.com/",
};

export default function SocialMedia({position,color="red"}) {
  return (
    <div className={`flex flex-row justify-${position} items-center gap-4 flex-wrap`}>
      {social_links.facebook_url && (
        <SocialLinks url={social_links.facebook_url} type="facebook" />
      )}
      {social_links.twitter_url && (
        <SocialLinks url={social_links.twitter_url} type="twitter" />
      )}
      {social_links.instagram_url && (
        <SocialLinks url={social_links.instagram_url} type="instagram" />
      )}
      {social_links.website_url && (
        <SocialLinks url={social_links.website_url} type="website" color={color}/>
      )}
    </div>
  );
}
