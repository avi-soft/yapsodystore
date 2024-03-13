const EventImage = ({ src }) => {
  src = src
    ? src
    : "https://yaptestaddon4.staging.yapsody.com/images/new_ci/styles/images/default-img.jpg";
  return (
    <img
      src={src}
      className="h-[100%] min-w-[100%] rounded  bg-[#cccccc] "
    ></img>
  );
};

export default EventImage;
