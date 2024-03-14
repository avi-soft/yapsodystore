import SingleEvent from "./SingleEvent";

const SingleEventPerformance = ({
  performances,
  buttonLinkBoxBorderColor,
  textColor,
  boxBackgroundColor,
  headingColor,
}) => {
  return (
    <div className="mt-[18px]">
      {performances.map((performance) => (
        <SingleEvent
          key={performance.id}
          performance={performance}
          buttonLinkBoxBorderColor={buttonLinkBoxBorderColor}
          textColor={textColor}
          boxBackgroundColor={boxBackgroundColor}
          headingColor={headingColor}
        />
      ))}
    </div>
  );
};

export default SingleEventPerformance;
