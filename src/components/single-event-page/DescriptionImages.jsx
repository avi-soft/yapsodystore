import Image from "next/image";

export default function DescriptionImages({ images }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 my-[30px] w-[90%] sm:w-[75%]">
      {images.map((image) => (
        <div
          key={image.id}
          className="border-[4px] border-[#ddd] rounded p-5 h-[150px] bg-[#fff] w-full relative cursor-pointer"
        >
          <Image src={image.thumb_url} alt="image" layout="fill" />
        </div>
      ))}
    </div>
  );
}

