import SingleEvent from "./SingleEvent";

const SingleEventPerformance = ({ performances, color }) => {
  return (
    <div className="mt-[18px]">
      {performances.map((performance) => (
        <SingleEvent
          key={performance.id}
          performance={performance}
          color={color}
        />
      ))}
    </div>
  );
};

export default SingleEventPerformance;
