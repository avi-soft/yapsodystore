import Image from "next/image";

const width = 50;
const height = 50;

const titleText = "Online Store";
export default function Title({
  logoImage,
  titleText,
  storeName,
  position = "center",
  color = "black",
}) {
  return (
    <div style={{ color }} className={`p-8 flex justify-${position} `}>
      {logoImage ? (
        <Image src={logoImage} width={width} height={height} alt="aaa" />
      ) : titleText ? (
        <h1 className={`text-4xl`}>{titleText}</h1>
      ) : (
        <h1 className="text-4xl">{storeName}</h1>
      )}
    </div>
  );
}
