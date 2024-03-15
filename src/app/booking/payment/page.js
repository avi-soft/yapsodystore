import Chat from "@/ui/ChatButton";
import CheckOutLeftPage from "@/components/check-out/CheckOutLeftPage";
export default function PaymentPage() {
  const themeColor = "red";
  return (
    <div className="flex justify-between">
      <div className="w-[70%]">
        <CheckOutLeftPage color={themeColor} />
      </div>
      <div>cart</div>
      <Chat />
    </div>
  );
}
