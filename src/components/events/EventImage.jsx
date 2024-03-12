const EventImage = ({ src }) => {
  return (
    <img
      src={src}
      className=" object-cover h-[100%] w-[100%] rounded-[6px] border-4 border-[#ffffff] bg-[#cccccc] "
    ></img>
  );
};

export default EventImage;
