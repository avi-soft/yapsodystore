import Link from "next/link";
import { notFound } from "next/navigation";

export default function SingleEventPage({ params }) {
  const { eventid, slug } = params;
  return (
    <div>
      <Link href={"/event/index/123"}> Single event Page</Link>
    </div>
  );
}
