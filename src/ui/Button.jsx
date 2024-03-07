import Link from "next/link";

export default function Button({ children, color, to, width }) {
  return (
    <Link href={to} passHref>
      <button
        style={{ backgroundColor: color, width: width ? width : null }}
        className={`mb-0 inline-block rounded-[3px] px-[28px] py-[10px] text-center text-[1em] text-[#ffffff] px-[20px]`}
      >
        {children}
      </button>
    </Link>
  );
}
