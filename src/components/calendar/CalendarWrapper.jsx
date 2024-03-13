export default function CalendarWrapper({ children, performancesCount }) {
  return (
    <div className="border-b mb-6 w-[100%] p-3">
      <div className="flex">
        <div className="flex gap-2 pr-2 border-r slate-300">
          <span>Upcoming Events ({performancesCount})</span>
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
