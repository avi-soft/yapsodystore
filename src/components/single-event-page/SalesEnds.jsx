export default function SalesEnds({ children, endTime, color }) {
  return (
    <div className="w-[33.33%] pl-[35px] text-center max-md:w-[100%] max-md:ml-[-20px]">
      <div>
        <p
          style={{ color }}
          className="mb-[3px] mt-[20px] text-[12px] font-normal text-[var(--text-primary)]"
        >
          {children}
        </p>
        <strong
          style={{ color }}
          className="text-center text-[18px] font-[500] text-[var(--text-primary)]"
        >
          {endTime}
        </strong>
      </div>
    </div>
  );
}
