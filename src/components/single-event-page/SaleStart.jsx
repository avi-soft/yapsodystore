import { priceFormat } from "@/helpers/common";

export default function SaleStart({ children, price, textColor, symbol }) {
  return (
    <div className="text-[var(--text-primary] text-center text-[14px] mt-[6px]">
      <span style={{ color: textColor }}>
        <p>{children}</p>
      </span>
      <span style={{ color: textColor }}>
        <p>
          {symbol}
          {priceFormat(price)}
        </p>
      </span>
    </div>
  );
}
