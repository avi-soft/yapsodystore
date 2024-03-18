import SocialLinks from "../social-media/SocialLinks";
export default function DescriptionHyperLinks({ hyperlinks, color }) {
  return (
    <div className="grid grid-cols-1 gap-y-5 sm:grid-cols-2 my-12 ">
      {hyperlinks.map((link) => (
        <SocialLinks
          key={link.id}
          url={link.hyperlink}
          type="hyperlinks"
          iconColor={color}
        />
      ))}
    </div>
  );
}
