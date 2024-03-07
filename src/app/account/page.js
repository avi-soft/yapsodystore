import Tab from "@/components/Tab/Tab";

export default function Home() {
  const userName = "test test";
  const email = "test@gmail.com";
  return (
    <main className="flex flex-col items-center  md:pt-20 pt-10 min-h-screen ">
      <h1 className="block text-[28px] my-8 ">{userName}</h1>
      <Tab user={userName} email={email} />
    </main>
  );
}
