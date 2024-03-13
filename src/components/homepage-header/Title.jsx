import Image from "next/image";

const width = 50;
const height = 50;

export default function Title({
  mainHeadingImage,
  mainHeadingText,
  venueName,
  headerAlignment,
  headingColor = "black",
  mainHeadingType,
}) {
  const headerAlignmentClass = {
    left: "flex-start",
    center: "center",
    right: "flex-end",
  }[headerAlignment ? headerAlignment : "center"];
  return (
    <div
      style={{
        color: headingColor,
        display: "flex",
        justifyContent: headerAlignmentClass,
      }}
      className={`p-8`}
    >
      {mainHeadingType == "img" && mainHeadingImage ? (
        <img src={mainHeadingImage} alt={venueName} />
      ) : mainHeadingType == "txt" && mainHeadingText ? (
        <h1 className={`text-4xl`}>{mainHeadingText}</h1>
      ) : (
        <h1 className="text-4xl">{venueName}</h1>
      )}
    </div>
  );
}
