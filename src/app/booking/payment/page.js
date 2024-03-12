import Chat from '@/components/chatbutton/page'
import CheckOutLeftPage from '@/components/check-out/CheckOutLeftPage';
export default function PaymentPage() {
  const themeColor = "red";
  return (
    
  <div className='mt-14 mb-4 flex justify-between'>
    <div className='w-[80%] float-left'>
    <CheckOutLeftPage color={themeColor}/>
    </div>
    <div>
      abc
    </div>
    <Chat />
  </div>
  );
}
