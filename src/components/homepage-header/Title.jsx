import Image from "next/image";

const width = 50;
const height = 50;

export default function Title({
  mainHeadingImage,
  mainHeadingText,
  venueName,
  headerAlignment,
  headingColor = "black",
}) {
  const headerAlignmentClass = {
    left: "start",
    center: "center",
    right: "end",
  }[headerAlignment ? headerAlignment : "center"];
  return (
    <div
      style={{ headingColor }}
      className={`p-8 flex justify-${headerAlignmentClass}`}
    >
      {mainHeadingImage ? (
        <img src={mainHeadingImage} alt={venueName} />
      ) : titleText ? (
        <h1 className={`text-4xl`}>{mainHeadingText}</h1>
      ) : (
        <h1 className="text-4xl">{storeName}</h1>
      )}
    </div>
  );
}
