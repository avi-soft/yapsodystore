import moment from "moment";
export default function EventDateTime({ date, headingColor, textColor }) {
  return (
    <div className="relative min-h-[1px] w-[33.33%] border-r border-[#00000012] pl-[10px] pr-[10px] max-md:w-[100%] max-md:border-r-0 ">
      <h4
        style={{ color: headingColor }}
        className="mb-[8px] mt-[17px] font-lato text-center text-[22px] font-[500] text-[#21262]"
      >
        {moment(date).format("MMM D, YYYY")}
      </h4>
      <p
        style={{ color: textColor }}
        className="mb-[15px] text-center font-lato text-[16px] font-[500] text-[var(--text-primary)]"
      >
        {moment(date).format("LT")}
      </p>
    </div>
  );
}
