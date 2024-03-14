import Link from "next/link";

export default function Button({
  children,
  color,
  to,
  width,
  padding_y = "10px",
  padding_x = "20px",
}) {
  return (
    <Link href={to} passHref>
      <button
        style={{ backgroundColor: color, width: width ? width : null }}
        className={`mb-0 inline-block rounded-[3px]  py-[${padding_y}] text-center text-[1em] text-[#ffffff] px-[${padding_x}]`}
      >
        {children}
      </button>
    </Link>
  );
}
