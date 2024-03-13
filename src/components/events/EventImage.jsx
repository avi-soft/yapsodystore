const EventImage = ({ src }) => {
  src = src
    ? src
    : "https://yaptestaddon4.staging.yapsody.com/images/new_ci/styles/images/default-img.jpg";
  return (
    <img
      src={src}
      className="object-cover h-[100%] w-[100%] rounded-[6px]  bg-[#cccccc] "
    ></img>
  );
};

export default EventImage;
