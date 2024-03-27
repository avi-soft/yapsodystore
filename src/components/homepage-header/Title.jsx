import Image from "next/image";

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
      className={`mx-[0px] mb-[22px] md:mb-[46px] mt-[30px] lg:mt-[17px] px-[10px] `}
    >
      {mainHeadingType == "img" && mainHeadingImage ? (
        <Image
          width={100}
          height={100}
          src={mainHeadingImage}
          alt={venueName}
        />
      ) : mainHeadingType == "txt" && mainHeadingText ? (
        <h1 className={`text-[22px] md:text-[36px]`}>{mainHeadingText}</h1>
      ) : (
        <h1 className="text-4xl">{venueName}</h1>
      )}
    </div>
  );
}
