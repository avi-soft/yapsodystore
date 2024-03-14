export default function EventDateTime({ date, time, headingColor, textColor }) {
  return (
    <div className="relative min-h-[1px] w-[33.33%] border-r pl-[10px] pr-[10px] max-md:w-[100%] max-md:border-r-0 ">
      <h4
        style={{ color: headingColor }}
        className="mb-[8px] mt-[17px] text-center text-[22px] font-[500] text-[#21262]"
      >
        {date}
      </h4>
      <p
        style={{ color: textColor }}
        className="mb-[15px] text-center text-[16px] font-[500] text-[var(--text-primary)]"
      >
        {time}
      </p>
    </div>
  );
}
