export default function SaleStart({ children, price }) {
  return (
    <div className="text-[var(--text-primary] text-center text-[14px] mt-[6px]">
      <span>
        <p>{children}</p>
      </span>
      <span>
        <p>$ {price}</p>
      </span>
    </div>
  );
}
