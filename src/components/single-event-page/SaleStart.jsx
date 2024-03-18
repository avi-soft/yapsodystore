import { priceFormat } from "@/helpers/common";

export default function SaleStart({ children, price, textColor, symbol }) {
  return (
    <div className="text-[var(--text-primary] text-center  mt-[6px] font-onlyLato text-[13px]">
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
