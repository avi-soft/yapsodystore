import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <div className="w-full items-center justify-between font-mono text-sm">
        <Card/>
        <Card/>
        <Card isCodeAvailable={false}/>

      </div>
    </main>
  );
}
