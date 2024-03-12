export default function CalendarWrapper({
  children,
  performancesCount,
  textColor,
}) {
  return (
    <div className="border-b mb-2 w-[100%]">
      <div className="flex">
        <div className="flex gap-2 pr-2 border-r slate-300">
          <span style={{ color: textColor }}>
            Upcoming Events ({performancesCount})
          </span>
        </div>
        <div className="ml-2">
          <div className="w-full">
            <div className="dropdown">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
